import {prisma} from '$server/http';

export default {
    get: async function (email: string, password: string) {
        const user = await prisma.user.findFirst({
            where: {
                email,
                status: 'active',
            },
            include: {
                settings: true,
            },
        });

        return user;
    },
};
