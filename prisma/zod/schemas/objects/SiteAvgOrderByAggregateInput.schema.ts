import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SiteAvgOrderByAggregateInput> = z
  .object({
    ballance: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SiteAvgOrderByAggregateInputObjectSchema = Schema;
