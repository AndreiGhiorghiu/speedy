import { AxiosInstance } from 'axios';
import * as fastify from 'fastify';

declare module 'fastify' {
  export interface FastifyInstance extends fastify.FastifyInstance {
    connect: (port?: number) => Promise<void>;
    disconnect: () => Promise<void>;

    client: AxiosInstance;

    helpers: {
      getSession: Function;
    };
  }

  export interface RouteOptions extends fastify.RouteOptions {
    allow?: string[];
    deny?: string[];
    public?: boolean;
  }

  export interface Session extends fastify.Session {
    user: any;
  }
}
