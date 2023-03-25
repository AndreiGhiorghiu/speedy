import { z } from 'zod';
import { UserCreateWithoutReferenceInputObjectSchema } from './UserCreateWithoutReferenceInput.schema';
import { UserUncheckedCreateWithoutReferenceInputObjectSchema } from './UserUncheckedCreateWithoutReferenceInput.schema';
import { UserCreateOrConnectWithoutReferenceInputObjectSchema } from './UserCreateOrConnectWithoutReferenceInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutReferenceInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutReferenceInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutReferenceInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutReferenceInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutReferenceInputObjectSchema = Schema;
