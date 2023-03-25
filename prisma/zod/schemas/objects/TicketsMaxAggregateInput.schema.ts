import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    category: z.literal(true).optional(),
    message: z.literal(true).optional(),
    status: z.literal(true).optional(),
    reporterId: z.literal(true).optional(),
    ticketsId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const TicketsMaxAggregateInputObjectSchema = Schema;