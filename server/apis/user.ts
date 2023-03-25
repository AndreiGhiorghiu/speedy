import { route } from '$server/http';
import { FastifyReply, FastifyRequest } from 'fastify';
import $user from '$services/user';
import { User, UserFormDataUpdate } from '$entities.types';
import { omit } from 'lodash';

route({
  method: 'GET',
  url: '/api/user',
  handler: async function (
    req: FastifyRequest<{ Querystring: { skip?: string; take?: string } }>,
    rep: FastifyReply
  ) {
    try {
      const filters = req.query;
      const data = await $user.getAll(filters);

      return rep.send({ data });
    } catch (error) {
      rep.code(500);
      rep.send({ error });
    }
  },
});

route({
  method: 'POST',
  url: '/api/user',
  handler: async function (
    req: FastifyRequest<{ Body: User & { confirmPassword: string } }>,
    rep: FastifyReply
  ) {
    try {
      const { body } = req;
      const user = omit(body, ['confirmPassword']) as User;
      const data = await $user.create(user);

      return rep.send({ data });
    } catch (error) {
      console.log(error);
      rep.code(500);
      rep.send({ error: error });
    }
  },
});

route({
  method: 'GET',
  url: '/api/user/:id',
  handler: async function (
    req: FastifyRequest<{ Params: { id: string } }>,
    rep: FastifyReply
  ) {
    try {
      const { id } = req.params;
      const data = await $user.getById(id);

      return rep.send({ data });
    } catch (error) {
      rep.code(500);
      rep.send({ error: error });
    }
  },
});

route({
  method: 'PATCH',
  url: '/api/user/:id',
  handler: async function (
    req: FastifyRequest<{
      Body: Partial<UserFormDataUpdate>;
      Params: { id: string };
    }>,
    rep: FastifyReply
  ) {
    try {
      const {
        body,
        params: { id },
      } = req;

      let user = omit(body, ['confirmPassword', 'id']) as Partial<User>;
      if (!user?.referenceId) {
        delete user.referenceId;
      }

      const data = await $user.update(id, user);

      return rep.send({ data });
    } catch (error) {
      console.log('error', error);
      rep.code(500);
      rep.send({ error: error });
    }
  },
});
