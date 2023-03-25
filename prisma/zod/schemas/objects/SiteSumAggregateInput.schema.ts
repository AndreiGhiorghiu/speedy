import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SiteSumAggregateInputType> = z
  .object({
    ballance: z.literal(true).optional(),
  })
  .strict();

export const SiteSumAggregateInputObjectSchema = Schema;
