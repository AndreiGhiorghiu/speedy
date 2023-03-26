import { prisma } from '$server/http';

export default {
  create: async function (projectID: string, data: string) {
    const result = await prisma.data.create({
      data: {
        projectID,
        data,
      },
    });

    return result;
  },

  findAll: async function (projectID: string) {
    const result = await prisma.data.findMany({
      where: {
        projectID,
      },
    });

    return result;
  },
};
