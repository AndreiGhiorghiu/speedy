import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionsCountOrderByAggregateInputObjectSchema } from './SessionsCountOrderByAggregateInput.schema';
import { SessionsMaxOrderByAggregateInputObjectSchema } from './SessionsMaxOrderByAggregateInput.schema';
import { SessionsMinOrderByAggregateInputObjectSchema } from './SessionsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    current: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SessionsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SessionsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SessionsMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SessionsOrderByWithAggregationInputObjectSchema = Schema;
