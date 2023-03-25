import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    status: z.literal(true).optional(),
    statisticsId: z.literal(true).optional(),
  })
  .strict();

export const DatabaseMinAggregateInputObjectSchema = Schema;