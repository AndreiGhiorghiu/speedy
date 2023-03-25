import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    databaseId: z.literal(true).optional(),
    data: z.literal(true).optional(),
  })
  .strict();

export const StatisticsMinAggregateInputObjectSchema = Schema;
