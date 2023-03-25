import { z } from 'zod';
import { UserCreateWithoutReferenceInputObjectSchema } from './UserCreateWithoutReferenceInput.schema';
import { UserUncheckedCreateWithoutReferenceInputObjectSchema } from './UserUncheckedCreateWithoutReferenceInput.schema';
import { UserCreateOrConnectWithoutReferenceInputObjectSchema } from './UserCreateOrConnectWithoutReferenceInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutReferenceInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutReferenceInputObjectSchema),
        z.lazy(() => UserCreateWithoutReferenceInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutReferenceInputObjectSchema),
        z
          .lazy(() => UserUncheckedCreateWithoutReferenceInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutReferenceInputObjectSchema),
        z
          .lazy(() => UserCreateOrConnectWithoutReferenceInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateNestedManyWithoutReferenceInputObjectSchema = Schema;
