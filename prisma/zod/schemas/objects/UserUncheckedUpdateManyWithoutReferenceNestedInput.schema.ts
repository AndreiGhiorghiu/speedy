import { z } from 'zod';
import { UserCreateWithoutReferenceInputObjectSchema } from './UserCreateWithoutReferenceInput.schema';
import { UserUncheckedCreateWithoutReferenceInputObjectSchema } from './UserUncheckedCreateWithoutReferenceInput.schema';
import { UserCreateOrConnectWithoutReferenceInputObjectSchema } from './UserCreateOrConnectWithoutReferenceInput.schema';
import { UserUpsertWithWhereUniqueWithoutReferenceInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutReferenceInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutReferenceInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutReferenceInput.schema';
import { UserUpdateManyWithWhereWithoutReferenceInputObjectSchema } from './UserUpdateManyWithWhereWithoutReferenceInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutReferenceNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutReferenceInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutReferenceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithWhereUniqueWithoutReferenceInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutReferenceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutReferenceInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateManyWithWhereWithoutReferenceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutReferenceNestedInputObjectSchema =
  Schema;
