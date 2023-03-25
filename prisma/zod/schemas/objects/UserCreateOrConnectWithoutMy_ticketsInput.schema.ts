import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMy_ticketsInputObjectSchema } from './UserCreateWithoutMy_ticketsInput.schema';
import { UserUncheckedCreateWithoutMy_ticketsInputObjectSchema } from './UserUncheckedCreateWithoutMy_ticketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMy_ticketsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutMy_ticketsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMy_ticketsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutMy_ticketsInputObjectSchema = Schema;
