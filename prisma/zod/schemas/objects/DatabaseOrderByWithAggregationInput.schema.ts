import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DatabaseCountOrderByAggregateInputObjectSchema } from './DatabaseCountOrderByAggregateInput.schema';
import { DatabaseMaxOrderByAggregateInputObjectSchema } from './DatabaseMaxOrderByAggregateInput.schema';
import { DatabaseMinOrderByAggregateInputObjectSchema } from './DatabaseMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    statisticsId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DatabaseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => DatabaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DatabaseMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DatabaseOrderByWithAggregationInputObjectSchema = Schema;
