import { z } from 'zod';
import { UserCreateWithoutDatabaseInputObjectSchema } from './UserCreateWithoutDatabaseInput.schema';
import { UserUncheckedCreateWithoutDatabaseInputObjectSchema } from './UserUncheckedCreateWithoutDatabaseInput.schema';
import { UserCreateOrConnectWithoutDatabaseInputObjectSchema } from './UserCreateOrConnectWithoutDatabaseInput.schema';
import { UserUpsertWithoutDatabaseInputObjectSchema } from './UserUpsertWithoutDatabaseInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDatabaseInputObjectSchema } from './UserUpdateWithoutDatabaseInput.schema';
import { UserUncheckedUpdateWithoutDatabaseInputObjectSchema } from './UserUncheckedUpdateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDatabaseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDatabaseInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutDatabaseInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutDatabaseInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutDatabaseInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutDatabaseInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutDatabaseInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutDatabaseNestedInputObjectSchema =
  Schema;
