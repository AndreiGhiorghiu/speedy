import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsMinOrderByAggregateInput> = z
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
  })
  .strict();

export const SettingsMinOrderByAggregateInputObjectSchema = Schema;
