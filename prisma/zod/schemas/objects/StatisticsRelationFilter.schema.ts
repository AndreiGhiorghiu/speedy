import { z } from 'zod';
import { StatisticsWhereInputObjectSchema } from './StatisticsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsRelationFilter> = z
  .object({
    is: z
      .lazy(() => StatisticsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => StatisticsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StatisticsRelationFilterObjectSchema = Schema;
