import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TicketsOrderByRelationAggregateInputObjectSchema } from './TicketsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    reporter: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    reporterId: z.lazy(() => SortOrderSchema).optional(),
    parent: z
      .lazy(() => TicketsOrderByWithRelationInputObjectSchema)
      .optional(),
    ticketsId: z.lazy(() => SortOrderSchema).optional(),
    responses: z
      .lazy(() => TicketsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TicketsOrderByWithRelationInputObjectSchema = Schema;
