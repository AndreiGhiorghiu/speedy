import qs from 'qs';
import formbody, { FormBodyPluginOptions } from '@fastify/formbody';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import fastifyMultipart from '@fastify/multipart';
import Fastify, {
  FastifyRegisterOptions,
  FastifyReply,
  RouteOptions,
} from 'fastify';
import log from '$server/log';
import CONFIG from '$server/config';
import $session from '$services/sessions';
import { addMinutes } from 'date-fns';
import { User } from '$entities.types';

const fastify = Fastify({
  querystringParser: qs.parse,
  caseSensitive: false,
  ignoreTrailingSlash: true,
  maxParamLength: 64,
  bodyLimit: 1048576, // 1MiB
  connectionTimeout: 48 * 1000, // 48s
  keepAliveTimeout: 8 * 1000, // 8s
  pluginTimeout: 8 * 1000, // 8s
  onProtoPoisoning: 'remove',
  onConstructorPoisoning: 'remove',
  return503OnClosing: true,
});

async function onFile(part) {
  const buff = await part.toBuffer();
  const decoded = Buffer.from(buff.toString(), 'base64').toString();

  part.value = decoded; // set `part.value` to specify the request body value
}

// handles HTTP form body parsing
fastify.register(formbody, { parser: qs.parse } as FormBodyPluginOptions);
fastify.register(fastifyMultipart);
fastify.register(fastifyCookie);

fastify.register(fastifySession, {
  cookieName: 'sessionId',
  secret: 'cQctC6D2UTKVQMwd6UrDz6vuXqtjzbPaqBLe8RrTyQh687hx',
  cookie: { secure: true, maxAge: 50000 },
  maxAge: 50000,
} as FastifyRegisterOptions<any>);

fastify.addHook('onRoute', (route) => {
  route.preHandler = async (request, reply, done) => {
    // @ts-ignore
    const isGuest = route?.accept?.includes('guest');

    if (!isGuest) {
      const browserSession = request.cookies[CONFIG.SESSION_NAME];

      if (!browserSession) {
        reply.statusCode = 401;
        done(new Error('not auth'));
      }

      const exist = await $session.check(browserSession);

      if (!exist) {
        reply.statusCode = 401;
        done(new Error('not auth'));
      } else {
        const session = await $session.update(browserSession);

        request.session.user = {
          ...exist.user,
          role: JSON.parse(exist.user.role)[0],
        } as User;

        reply.setCookie(CONFIG.SESSION_NAME, session as string, {
          expires: addMinutes(new Date(), 10),
          path: '/',
        });
      }
    }
  };
});

if (CONFIG.IS_DEVELOPMENT) {
  fastify.addHook('onResponse', async (request, reply) => {
    const time = Math.round(reply.getResponseTime());

    log.debug(`${request.method} ${request.url} ${time}ms`);
  });
}

export default fastify;
