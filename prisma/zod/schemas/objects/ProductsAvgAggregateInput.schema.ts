import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsAvgAggregateInputType> = z
  .object({
    price: z.literal(true).optional(),
    old_price: z.literal(true).optional(),
    exp_month: z.literal(true).optional(),
    exp_year: z.literal(true).optional(),
    dbVersion: z.literal(true).optional(),
  })
  .strict();

export const ProductsAvgAggregateInputObjectSchema = Schema;
