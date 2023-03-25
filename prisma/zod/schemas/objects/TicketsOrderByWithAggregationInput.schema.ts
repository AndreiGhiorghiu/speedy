import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketsCountOrderByAggregateInputObjectSchema } from './TicketsCountOrderByAggregateInput.schema';
import { TicketsMaxOrderByAggregateInputObjectSchema } from './TicketsMaxOrderByAggregateInput.schema';
import { TicketsMinOrderByAggregateInputObjectSchema } from './TicketsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    reporterId: z.lazy(() => SortOrderSchema).optional(),
    ticketsId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TicketsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => TicketsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TicketsMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TicketsOrderByWithAggregationInputObjectSchema = Schema;
