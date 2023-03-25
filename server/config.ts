import dotenv from 'dotenv';
import { expand as dotenvExpand } from 'dotenv-expand';
import { z } from 'zod';

export type Configuration = z.infer<typeof zConfiguration>;
const zConfiguration = z.object({
  NODE_ENV: z.string(),

  HTTP_HOST: z.string(),
  HTTP_PORT: z.string(),

  FRONTEND_HOST: z.string(),
  FRONTEND_PORT: z.string(),

  IS_DEVELOPMENT: z.boolean(),
  IS_PRODUCTION: z.boolean(),
  URL: z.string(),
  SESSION_NAME: z.string(),
});

const config = {
  ...dotenvExpand(dotenv.config()).parsed,

  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',

  URL: `http://${process.env.HTTP_HOST}:${process.env.HTTP_PORT}`,
};

try {
  zConfiguration.parse(config);
} catch (error: any) {
  console.error('Missing .env variables:');
  console.error(error.issues.map((e: any) => ' - ' + e.path.join()).join('\n'));
  process.exit();
}

export default config as Configuration;
