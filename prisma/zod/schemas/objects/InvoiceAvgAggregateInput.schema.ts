import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceAvgAggregateInputType> = z
  .object({
    total: z.literal(true).optional(),
  })
  .strict();

export const InvoiceAvgAggregateInputObjectSchema = Schema;