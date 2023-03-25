import { route } from '$server/http';
import { FastifyReply, FastifyRequest } from 'fastify';
import $openai from '$services/openai';

route({
  method: 'POST',
  url: '/api/v1/ask',
  accept: ['guest'],
  handler: async function (
    req: FastifyRequest<{ Body: { question: string } }>,
    rep: FastifyReply
  ) {
    try {
      const { question } = req.body;

      const data = await $openai.chat(question);

      return rep.send({ data });
    } catch (error) {
      rep.code(500);
      rep.send({ error });
    }
  },
});
