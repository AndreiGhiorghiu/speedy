import { z } from 'zod';
import { UserCreateWithoutMy_ticketsInputObjectSchema } from './UserCreateWithoutMy_ticketsInput.schema';
import { UserUncheckedCreateWithoutMy_ticketsInputObjectSchema } from './UserUncheckedCreateWithoutMy_ticketsInput.schema';
import { UserCreateOrConnectWithoutMy_ticketsInputObjectSchema } from './UserCreateOrConnectWithoutMy_ticketsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMy_ticketsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutMy_ticketsInputObjectSchema = Schema;
