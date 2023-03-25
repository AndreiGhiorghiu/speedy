import { z } from 'zod';
import { DatabaseUncheckedCreateNestedOneWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedCreateNestedOneWithoutStatisticsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    databaseId: z.string().optional().nullable(),
    Database: z
      .lazy(
        () =>
          DatabaseUncheckedCreateNestedOneWithoutStatisticsInputObjectSchema,
      )
      .optional(),
    data: z.string(),
  })
  .strict();

export const StatisticsUncheckedCreateInputObjectSchema = Schema;
