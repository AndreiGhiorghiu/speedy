import { z } from 'zod';
import { DatabaseUpdateWithoutStatisticsInputObjectSchema } from './DatabaseUpdateWithoutStatisticsInput.schema';
import { DatabaseUncheckedUpdateWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedUpdateWithoutStatisticsInput.schema';
import { DatabaseCreateWithoutStatisticsInputObjectSchema } from './DatabaseCreateWithoutStatisticsInput.schema';
import { DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedCreateWithoutStatisticsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpsertWithoutStatisticsInput> = z
  .object({
    update: z.union([
      z.lazy(() => DatabaseUpdateWithoutStatisticsInputObjectSchema),
      z.lazy(() => DatabaseUncheckedUpdateWithoutStatisticsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DatabaseCreateWithoutStatisticsInputObjectSchema),
      z.lazy(() => DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema),
    ]),
  })
  .strict();

export const DatabaseUpsertWithoutStatisticsInputObjectSchema = Schema;
