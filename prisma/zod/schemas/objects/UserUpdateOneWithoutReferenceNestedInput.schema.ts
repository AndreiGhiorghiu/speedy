import { z } from 'zod';
import { UserCreateWithoutReferenceInputObjectSchema } from './UserCreateWithoutReferenceInput.schema';
import { UserUncheckedCreateWithoutReferenceInputObjectSchema } from './UserUncheckedCreateWithoutReferenceInput.schema';
import { UserCreateOrConnectWithoutReferenceInputObjectSchema } from './UserCreateOrConnectWithoutReferenceInput.schema';
import { UserUpsertWithoutReferenceInputObjectSchema } from './UserUpsertWithoutReferenceInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReferenceInputObjectSchema } from './UserUpdateWithoutReferenceInput.schema';
import { UserUncheckedUpdateWithoutReferenceInputObjectSchema } from './UserUncheckedUpdateWithoutReferenceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutReferenceNestedInput> = z
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
    upsert: z
      .lazy(() => UserUpsertWithoutReferenceInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutReferenceInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutReferenceInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutReferenceNestedInputObjectSchema = Schema;
