import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StatisticsCountOrderByAggregateInputObjectSchema } from './StatisticsCountOrderByAggregateInput.schema';
import { StatisticsMaxOrderByAggregateInputObjectSchema } from './StatisticsMaxOrderByAggregateInput.schema';
import { StatisticsMinOrderByAggregateInputObjectSchema } from './StatisticsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    databaseId: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StatisticsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => StatisticsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => StatisticsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StatisticsOrderByWithAggregationInputObjectSchema = Schema;
