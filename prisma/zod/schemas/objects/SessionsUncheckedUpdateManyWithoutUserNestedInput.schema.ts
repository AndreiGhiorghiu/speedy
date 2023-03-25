import { z } from 'zod';
import { SessionsCreateWithoutUserInputObjectSchema } from './SessionsCreateWithoutUserInput.schema';
import { SessionsUncheckedCreateWithoutUserInputObjectSchema } from './SessionsUncheckedCreateWithoutUserInput.schema';
import { SessionsCreateOrConnectWithoutUserInputObjectSchema } from './SessionsCreateOrConnectWithoutUserInput.schema';
import { SessionsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SessionsUpsertWithWhereUniqueWithoutUserInput.schema';
import { SessionsWhereUniqueInputObjectSchema } from './SessionsWhereUniqueInput.schema';
import { SessionsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SessionsUpdateWithWhereUniqueWithoutUserInput.schema';
import { SessionsUpdateManyWithWhereWithoutUserInputObjectSchema } from './SessionsUpdateManyWithWhereWithoutUserInput.schema';
import { SessionsScalarWhereInputObjectSchema } from './SessionsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionsCreateWithoutUserInputObjectSchema),
          z.lazy(() => SessionsCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => SessionsUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => SessionsUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionsCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => SessionsCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SessionsUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => SessionsUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => SessionsWhereUniqueInputObjectSchema),
          z.lazy(() => SessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SessionsWhereUniqueInputObjectSchema),
          z.lazy(() => SessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SessionsWhereUniqueInputObjectSchema),
          z.lazy(() => SessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionsWhereUniqueInputObjectSchema),
          z.lazy(() => SessionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SessionsUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => SessionsUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionsUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => SessionsUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SessionsScalarWhereInputObjectSchema),
          z.lazy(() => SessionsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionsUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
