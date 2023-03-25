import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceSumAggregateInputType> = z
  .object({
    total: z.literal(true).optional(),
  })
  .strict();

export const InvoiceSumAggregateInputObjectSchema = Schema;
