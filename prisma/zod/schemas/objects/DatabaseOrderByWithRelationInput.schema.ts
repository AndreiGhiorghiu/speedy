import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductsOrderByRelationAggregateInputObjectSchema } from './ProductsOrderByRelationAggregateInput.schema';
import { StatisticsOrderByWithRelationInputObjectSchema } from './StatisticsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    products: z
      .lazy(() => ProductsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    statistics: z
      .lazy(() => StatisticsOrderByWithRelationInputObjectSchema)
      .optional(),
    statisticsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DatabaseOrderByWithRelationInputObjectSchema = Schema;
