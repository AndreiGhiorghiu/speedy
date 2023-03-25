import { z } from 'zod';
import { StatisticsCreateWithoutDatabaseInputObjectSchema } from './StatisticsCreateWithoutDatabaseInput.schema';
import { StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema } from './StatisticsUncheckedCreateWithoutDatabaseInput.schema';
import { StatisticsCreateOrConnectWithoutDatabaseInputObjectSchema } from './StatisticsCreateOrConnectWithoutDatabaseInput.schema';
import { StatisticsUpsertWithoutDatabaseInputObjectSchema } from './StatisticsUpsertWithoutDatabaseInput.schema';
import { StatisticsWhereUniqueInputObjectSchema } from './StatisticsWhereUniqueInput.schema';
import { StatisticsUpdateWithoutDatabaseInputObjectSchema } from './StatisticsUpdateWithoutDatabaseInput.schema';
import { StatisticsUncheckedUpdateWithoutDatabaseInputObjectSchema } from './StatisticsUncheckedUpdateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsUpdateOneWithoutDatabaseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatisticsCreateWithoutDatabaseInputObjectSchema),
          z.lazy(
            () => StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatisticsCreateOrConnectWithoutDatabaseInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StatisticsUpsertWithoutDatabaseInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => StatisticsWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StatisticsUpdateWithoutDatabaseInputObjectSchema),
          z.lazy(
            () => StatisticsUncheckedUpdateWithoutDatabaseInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const StatisticsUpdateOneWithoutDatabaseNestedInputObjectSchema = Schema;
