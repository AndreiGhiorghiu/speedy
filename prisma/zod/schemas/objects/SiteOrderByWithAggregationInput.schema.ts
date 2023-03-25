import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SiteCountOrderByAggregateInputObjectSchema } from './SiteCountOrderByAggregateInput.schema';
import { SiteAvgOrderByAggregateInputObjectSchema } from './SiteAvgOrderByAggregateInput.schema';
import { SiteMaxOrderByAggregateInputObjectSchema } from './SiteMaxOrderByAggregateInput.schema';
import { SiteMinOrderByAggregateInputObjectSchema } from './SiteMinOrderByAggregateInput.schema';
import { SiteSumOrderByAggregateInputObjectSchema } from './SiteSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SiteOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    ballance: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SiteCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => SiteAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SiteMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SiteMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SiteSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SiteOrderByWithAggregationInputObjectSchema = Schema;
