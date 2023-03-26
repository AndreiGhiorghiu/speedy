import CONFIG from '$server/config';
import fastify from './fastify';
import pino from 'pino';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  try {
    return await next(params);
  } catch (e) {
    if (params.runInTransaction) {
      console.log('tx failed with', params);
    }
  }
});

const logger = pino(
  {
    transport: {
      target: 'pino-pretty',
      options: { colorize: true, levelFirst: true },
    },
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  },
  pino.destination('./logger.log')
);

fastify.connect = async (port?: number) => {
  await fastify.listen({
    host: CONFIG.HTTP_HOST || 'localhost',
    port: port || Number(CONFIG.HTTP_PORT),
  });

  await prisma.$disconnect();
};

fastify.disconnect = async () => {
  await prisma.$disconnect();
  await fastify.close();
};

function route(options: any) {
  fastify.route(options);
}

export { logger, prisma, route };
export default fastify;
