import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    username: z.literal(true).optional(),
    role: z.literal(true).optional(),
    password: z.literal(true).optional(),
    ballance: z.literal(true).optional(),
    secure: z.literal(true).optional(),
    status: z.literal(true).optional(),
    fee: z.literal(true).optional(),
    referenceId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
