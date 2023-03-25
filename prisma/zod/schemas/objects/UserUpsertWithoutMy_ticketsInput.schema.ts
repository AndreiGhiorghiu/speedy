import { z } from 'zod';
import { UserUpdateWithoutMy_ticketsInputObjectSchema } from './UserUpdateWithoutMy_ticketsInput.schema';
import { UserUncheckedUpdateWithoutMy_ticketsInputObjectSchema } from './UserUncheckedUpdateWithoutMy_ticketsInput.schema';
import { UserCreateWithoutMy_ticketsInputObjectSchema } from './UserCreateWithoutMy_ticketsInput.schema';
import { UserUncheckedCreateWithoutMy_ticketsInputObjectSchema } from './UserUncheckedCreateWithoutMy_ticketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutMy_ticketsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutMy_ticketsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutMy_ticketsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutMy_ticketsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMy_ticketsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutMy_ticketsInputObjectSchema = Schema;
