import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    current: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
  })
  .strict();

export const SessionsMaxAggregateInputObjectSchema = Schema;