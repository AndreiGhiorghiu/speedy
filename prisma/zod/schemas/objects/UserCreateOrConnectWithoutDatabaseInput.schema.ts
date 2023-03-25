import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDatabaseInputObjectSchema } from './UserCreateWithoutDatabaseInput.schema';
import { UserUncheckedCreateWithoutDatabaseInputObjectSchema } from './UserUncheckedCreateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDatabaseInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDatabaseInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDatabaseInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDatabaseInputObjectSchema = Schema;
