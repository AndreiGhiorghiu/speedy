import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DatabaseOrderByWithRelationInputObjectSchema } from './DatabaseOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    databaseId: z.lazy(() => SortOrderSchema).optional(),
    Database: z
      .lazy(() => DatabaseOrderByWithRelationInputObjectSchema)
      .optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StatisticsOrderByWithRelationInputObjectSchema = Schema;
