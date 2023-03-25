import {prisma} from '$server/http';

import {User} from '@prisma/client';

export default {
    add: async function (data: Omit<User & {username: string}, 'id'>) {
        data.password = data.password;
        data.role = JSON.stringify(data?.role || ['guest']);

        const user = await prisma.user.create({
            data: {
                ...data,
                settings: {
                    create: {},
                },
            },
        });

        return user;
    },
};
