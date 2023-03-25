import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SettingsCountOrderByAggregateInputObjectSchema } from './SettingsCountOrderByAggregateInput.schema';
import { SettingsMaxOrderByAggregateInputObjectSchema } from './SettingsMaxOrderByAggregateInput.schema';
import { SettingsMinOrderByAggregateInputObjectSchema } from './SettingsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    importerPresets: z.lazy(() => SortOrderSchema).optional(),
    theme: z.lazy(() => SortOrderSchema).optional(),
    canNotify: z.lazy(() => SortOrderSchema).optional(),
    canAlert: z.lazy(() => SortOrderSchema).optional(),
    alerts: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SettingsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SettingsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SettingsMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SettingsOrderByWithAggregationInputObjectSchema = Schema;
