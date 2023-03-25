import pino, { LoggerOptions } from 'pino';
import CONFIG from '$server/config';

const options = {
  name: 'server',
  level: CONFIG.IS_DEVELOPMENT ? 'debug' : 'info',
  transport: {
    target: 'pino-pretty',
    options: CONFIG.IS_DEVELOPMENT && {
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname',
    },
  },
};

export default pino(options as LoggerOptions);
