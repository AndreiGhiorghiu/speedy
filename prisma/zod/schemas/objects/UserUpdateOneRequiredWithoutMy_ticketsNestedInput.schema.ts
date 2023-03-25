import { z } from 'zod';
import { UserCreateWithoutMy_ticketsInputObjectSchema } from './UserCreateWithoutMy_ticketsInput.schema';
import { UserUncheckedCreateWithoutMy_ticketsInputObjectSchema } from './UserUncheckedCreateWithoutMy_ticketsInput.schema';
import { UserCreateOrConnectWithoutMy_ticketsInputObjectSchema } from './UserCreateOrConnectWithoutMy_ticketsInput.schema';
import { UserUpsertWithoutMy_ticketsInputObjectSchema } from './UserUpsertWithoutMy_ticketsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMy_ticketsInputObjectSchema } from './UserUpdateWithoutMy_ticketsInput.schema';
import { UserUncheckedUpdateWithoutMy_ticketsInputObjectSchema } from './UserUncheckedUpdateWithoutMy_ticketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMy_ticketsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutMy_ticketsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutMy_ticketsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutMy_ticketsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutMy_ticketsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutMy_ticketsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutMy_ticketsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutMy_ticketsNestedInputObjectSchema =
  Schema;
