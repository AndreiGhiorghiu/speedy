import { z } from 'zod';
import { StatisticsUpdateWithoutDatabaseInputObjectSchema } from './StatisticsUpdateWithoutDatabaseInput.schema';
import { StatisticsUncheckedUpdateWithoutDatabaseInputObjectSchema } from './StatisticsUncheckedUpdateWithoutDatabaseInput.schema';
import { StatisticsCreateWithoutDatabaseInputObjectSchema } from './StatisticsCreateWithoutDatabaseInput.schema';
import { StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema } from './StatisticsUncheckedCreateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsUpsertWithoutDatabaseInput> = z
  .object({
    update: z.union([
      z.lazy(() => StatisticsUpdateWithoutDatabaseInputObjectSchema),
      z.lazy(() => StatisticsUncheckedUpdateWithoutDatabaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StatisticsCreateWithoutDatabaseInputObjectSchema),
      z.lazy(() => StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema),
    ]),
  })
  .strict();

export const StatisticsUpsertWithoutDatabaseInputObjectSchema = Schema;
