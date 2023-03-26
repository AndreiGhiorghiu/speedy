import axios from 'axios';
import fs from 'fs';
import path from 'path';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export default {
  chat: async function (question: string, files: string[]) {
    const data = await Promise.all(
      files.map((file) => {
        try {
          const data = fs.readFileSync(
            path.join(__dirname, '..', 'files', file),
            {
              encoding: 'utf8',
            }
          );

          return data;
        } catch (error) {
          return file;
        }
      })
    );

    const transcript = data.join('\n').split(' ').slice(-2700).join(' ');

    const response = await openai.post('/chat/completions', {
      model: 'gpt-4',
      messages: [
        {
          content: transcript,
          role: 'system',
        },
        {
          content: `${question}. If you dont have the information please return "I'm sorry I dont understand."`,
          role: 'user',
        },
      ],
    });

    return response.data?.choices?.[0]?.message?.content;
  },

  train: async function (transcript: string) {
    const response = await openai.post('/chat/completions', {
      model: 'gpt-4',
      messages: [
        {
          content: transcript,
          role: 'system',
        },
        {
          content:
            'Based on previous information, extract a list of tasks from the meeting transcript above, and label them according to the SPEED catogories: Strategy, Product, Experience, Engineering and Data. Do not include the persons, estimations or irrelevant information to the project. Fill all SPEED categories. Use JSON format.',
          role: 'user',
        },
      ],
    });

    return response.data;
  },
};
