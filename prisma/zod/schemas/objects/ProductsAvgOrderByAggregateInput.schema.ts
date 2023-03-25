import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsAvgOrderByAggregateInput> = z
  .object({
    price: z.lazy(() => SortOrderSchema).optional(),
    old_price: z.lazy(() => SortOrderSchema).optional(),
    exp_month: z.lazy(() => SortOrderSchema).optional(),
    exp_year: z.lazy(() => SortOrderSchema).optional(),
    dbVersion: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductsAvgOrderByAggregateInputObjectSchema = Schema;
