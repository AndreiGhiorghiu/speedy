import { z } from 'zod';
import { UserUpdateWithoutDatabaseInputObjectSchema } from './UserUpdateWithoutDatabaseInput.schema';
import { UserUncheckedUpdateWithoutDatabaseInputObjectSchema } from './UserUncheckedUpdateWithoutDatabaseInput.schema';
import { UserCreateWithoutDatabaseInputObjectSchema } from './UserCreateWithoutDatabaseInput.schema';
import { UserUncheckedCreateWithoutDatabaseInputObjectSchema } from './UserUncheckedCreateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutDatabaseInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDatabaseInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDatabaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDatabaseInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDatabaseInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutDatabaseInputObjectSchema = Schema;
