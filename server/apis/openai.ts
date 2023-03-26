import { route } from '$server/http';
import { FastifyReply, FastifyRequest } from 'fastify';
import $openai from '$services/openai';
import $data from '$services/data';
import fs from 'fs';
import cuid from 'cuid';
import path from 'path';
import axios from 'axios';

const cache = new Map();

async function streamToString(stream: any) {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString('utf-8');
}

route({
  method: 'POST',
  url: '/api/v1/ask/:projectID',
  accept: ['guest'],
  handler: async function (
    req: FastifyRequest<{
      Body: { question: string };
      Params: {
        projectID: string;
      };
    }>,
    rep: FastifyReply
  ) {
    try {
      const { question } = req.body;
      const { projectID } = req.params;

      if (question.includes('?')) {
        const dbTranscripts = await $data.findAll(projectID);
        const transcripts = dbTranscripts.map((item) => item.data);

        const data = await $openai.chat(question, transcripts);

        return rep.send({ data });
      }

      await $data.create(projectID, question);

      return rep.send({ data: 'Got it.' });
    } catch (error) {
      rep.code(500);
      rep.send({ error });
    }
  },
});

route({
  method: 'POST',
  url: '/api/v1/train/:projectId',
  accept: ['guest'],
  handler: async function (
    req: FastifyRequest<{
      Body: { question: string };
      Params: { projectId: string };
    }>,
    rep: FastifyReply
  ) {
    try {
      const data = await req.file();
      const { projectId } = req.params;
      const id = `res-${cuid()}`;

      if (data) {
        const ext = data.filename.split('.')[1];
        const name = `${id}.${ext}`;
        const filePath = path.join(__dirname, '..', 'files', name);

        if (cache.get(data.filename)) {
          return cache.get(data.filename) || [];
        }

        const result = await streamToString(data.file);

        await $data.create(projectId, name);

        fs.writeFileSync(filePath, result);

        const responseData = await $openai.train(result);

        const dataJson = JSON.parse(
          responseData?.choices?.[0]?.message?.content || '[]'
        );

        let ids = 0;
        const finalData = Object.entries(dataJson).reduce(
          (total: any, [label, tasks]: any) => {
            tasks.forEach((text: string) => {
              ids += 1;

              total.push({
                id: ids,
                title: text,
                label: label,
                storyPoints: '0P',
              });
            });

            return total;
          },
          []
        );

        const response = await axios.post(
          'http://127.0.0.1:5000/sp-estimation',
          {
            titles: finalData.map((item: any) => item.title),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const final = finalData.map((item, index) => ({
          ...item,
          storyPoints: `${response.data.storypoints[index]}P`,
        }));

        cache.set(data.filename, final);

        return rep.send(final || []);
      }

      return rep.send([]);
    } catch (error) {
      rep.code(500);
      rep.send({ error: error.message });
    }
  },
});
