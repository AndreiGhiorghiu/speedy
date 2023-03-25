import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SiteMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    ballance: z.literal(true).optional(),
    data: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const SiteMinAggregateInputObjectSchema = Schema;
