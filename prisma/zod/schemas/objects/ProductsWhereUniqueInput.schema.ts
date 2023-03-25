import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const ProductsWhereUniqueInputObjectSchema = Schema;
