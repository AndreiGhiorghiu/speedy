import { route } from '$server/http';
import { FastifyReply, FastifyRequest } from 'fastify';
import $auth from '$services/auth';
import $user from '$services/user';
import $session from '$services/sessions';

import CONFIG from '$server/config';
import { User } from '@prisma/client';

route({
  method: 'POST',
  url: '/api/auth/register',
  accept: ['guest'],
  handler: async function (
    req: FastifyRequest<{ Body: User }>,
    rep: FastifyReply
  ) {
    const data = req.body;

    try {
      const user = await $auth.add(data);

      const session = await $session.add(user.id);
      rep.setCookie(CONFIG.SESSION_NAME, session, { path: '/' });

      return rep.send(user);
    } catch (error) {
      console.log('error', error);
      rep.code(500);
      rep.send({ error: true });
    }
  },
});

route({
  method: 'POST',
  url: '/api/auth/login',
  accept: ['guest'],
  handler: async function (
    req: FastifyRequest<{ Body: { email: string; password: string } }>,
    rep: FastifyReply
  ) {
    const { email, password } = req.body;
    const user = await $user.get(email, password);

    if (!user) {
      return rep.status(404).send();
    }
    const session = await $session.add(user.id);

    rep.setCookie(CONFIG.SESSION_NAME, session, { path: '/' });

    return rep.send(user);
  },
});

route({
  method: 'POST',
  url: '/api/auth/me',
  handler: async function (req: FastifyRequest, rep: FastifyReply) {
    const cookie = rep.getHeader('set-cookie') as string | undefined;
    const from = (cookie?.indexOf('=') || 0) + 1;
    const to = cookie?.indexOf(';') || 0;

    const sessionId = cookie?.substring(from, to) as string;

    const user = await $session.getUserBySession(sessionId || '');

    return rep.send({ data: user });
  },
});

route({
  method: 'GET',
  url: '/api/auth/logout',
  handler: async function (req: FastifyRequest, rep: FastifyReply) {
    rep.clearCookie('DEKO_NSID', { path: '/' });
    req.session.destroy();
    rep.send({ success: true });
  },
});
