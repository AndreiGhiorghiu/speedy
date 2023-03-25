import { z } from 'zod';
import { DatabaseCreateWithoutStatisticsInputObjectSchema } from './DatabaseCreateWithoutStatisticsInput.schema';
import { DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedCreateWithoutStatisticsInput.schema';
import { DatabaseCreateOrConnectWithoutStatisticsInputObjectSchema } from './DatabaseCreateOrConnectWithoutStatisticsInput.schema';
import { DatabaseUpsertWithoutStatisticsInputObjectSchema } from './DatabaseUpsertWithoutStatisticsInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseUpdateWithoutStatisticsInputObjectSchema } from './DatabaseUpdateWithoutStatisticsInput.schema';
import { DatabaseUncheckedUpdateWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedUpdateWithoutStatisticsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedUpdateOneWithoutStatisticsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DatabaseCreateWithoutStatisticsInputObjectSchema),
          z.lazy(
            () => DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DatabaseCreateOrConnectWithoutStatisticsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DatabaseUpsertWithoutStatisticsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => DatabaseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DatabaseUpdateWithoutStatisticsInputObjectSchema),
          z.lazy(
            () => DatabaseUncheckedUpdateWithoutStatisticsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const DatabaseUncheckedUpdateOneWithoutStatisticsNestedInputObjectSchema =
  Schema;
