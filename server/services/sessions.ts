import { prisma } from '$server/http';
import cuid from 'cuid';
import { addMinutes } from 'date-fns';

export default {
  add: async function (userId: string) {
    const session = cuid();
    const expiresAt = addMinutes(new Date(), 10);

    await prisma.sessions.create({
      data: {
        current: session,
        userId: userId,
        expiresAt,
      },
    });

    return session;
  },
  getUserBySession: async function (session: string) {
    const dbSession = await prisma.sessions.findFirst({
      where: {
        current: session,
      },
      include: {
        user: {
          include: {
            settings: true,
            BuyerProducts: true,
          },
        },
      },
    });

    if (dbSession?.user?.role) {
      dbSession.user.role = JSON.parse(dbSession?.user.role);
    }

    return dbSession?.user;
  },
  check: async function (session: string | unknown) {
    if (!session) {
      return;
    }

    const dbSession = await prisma.sessions.findFirst({
      where: {
        current: session,
        expiresAt: {
          gte: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    return dbSession;
  },
  clearUserSession: async function (userId: string) {
    return await prisma.sessions.deleteMany({
      where: {
        userId,
      },
    });
  },

  update: async function (session: string | unknown) {
    if (!session) {
      return;
    }

    const expiresAt = addMinutes(new Date(), 10);

    await prisma.sessions.update({
      where: {
        // @ts-ignore
        current: session,
      },
      data: {
        expiresAt,
      },
    });

    return session;
  },
};
