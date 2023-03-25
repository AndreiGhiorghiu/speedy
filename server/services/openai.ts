import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export default {
  chat: async function (question: string) {
    const response = await openai.post('/chat/completions', {
      model: 'gpt-4',
      messages: [
        {
          content: 'Adrian is the Android developer.',
          role: 'system',
        },
        {
          content: 'Adrian make awesome android apps.',
          role: 'system',
        },
        {
          content:
            'All the answers will be based on what I uploaded in the system',
          role: 'system',
        },
        {
          content: `${question} based in previows input`,
          role: 'user',
        },
      ],
    });

    console.log('response', response);

    return response.data;
  },
};
