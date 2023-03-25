import { z } from 'zod';
import { DatabaseCreateNestedOneWithoutStatisticsInputObjectSchema } from './DatabaseCreateNestedOneWithoutStatisticsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsCreateInput> = z
  .object({
    id: z.string().optional(),
    databaseId: z.string().optional().nullable(),
    Database: z
      .lazy(() => DatabaseCreateNestedOneWithoutStatisticsInputObjectSchema)
      .optional(),
    data: z.string(),
  })
  .strict();

export const StatisticsCreateInputObjectSchema = Schema;
