import { z } from 'zod';
import { DatabaseCreateWithoutOwnerInputObjectSchema } from './DatabaseCreateWithoutOwnerInput.schema';
import { DatabaseUncheckedCreateWithoutOwnerInputObjectSchema } from './DatabaseUncheckedCreateWithoutOwnerInput.schema';
import { DatabaseCreateOrConnectWithoutOwnerInputObjectSchema } from './DatabaseCreateOrConnectWithoutOwnerInput.schema';
import { DatabaseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './DatabaseUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './DatabaseUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { DatabaseUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './DatabaseUpdateManyWithWhereWithoutOwnerInput.schema';
import { DatabaseScalarWhereInputObjectSchema } from './DatabaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedUpdateManyWithoutOwnerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DatabaseCreateWithoutOwnerInputObjectSchema),
          z.lazy(() => DatabaseCreateWithoutOwnerInputObjectSchema).array(),
          z.lazy(() => DatabaseUncheckedCreateWithoutOwnerInputObjectSchema),
          z
            .lazy(() => DatabaseUncheckedCreateWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DatabaseCreateOrConnectWithoutOwnerInputObjectSchema),
          z
            .lazy(() => DatabaseCreateOrConnectWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => DatabaseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema,
          ),
          z
            .lazy(
              () => DatabaseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => DatabaseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema,
          ),
          z
            .lazy(
              () => DatabaseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DatabaseUpdateManyWithWhereWithoutOwnerInputObjectSchema,
          ),
          z
            .lazy(
              () => DatabaseUpdateManyWithWhereWithoutOwnerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DatabaseScalarWhereInputObjectSchema),
          z.lazy(() => DatabaseScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DatabaseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema =
  Schema;
