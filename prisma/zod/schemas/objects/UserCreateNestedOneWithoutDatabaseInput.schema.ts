import { z } from 'zod';
import { UserCreateWithoutDatabaseInputObjectSchema } from './UserCreateWithoutDatabaseInput.schema';
import { UserUncheckedCreateWithoutDatabaseInputObjectSchema } from './UserUncheckedCreateWithoutDatabaseInput.schema';
import { UserCreateOrConnectWithoutDatabaseInputObjectSchema } from './UserCreateOrConnectWithoutDatabaseInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDatabaseInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutDatabaseInputObjectSchema = Schema;
