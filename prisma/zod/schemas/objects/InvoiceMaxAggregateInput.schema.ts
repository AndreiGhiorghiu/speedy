import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    code: z.literal(true).optional(),
    total: z.literal(true).optional(),
    status: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const InvoiceMaxAggregateInputObjectSchema = Schema;