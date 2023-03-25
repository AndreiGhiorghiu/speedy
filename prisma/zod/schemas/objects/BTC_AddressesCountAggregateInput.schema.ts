import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    address: z.literal(true).optional(),
    status: z.literal(true).optional(),
    received_btc: z.literal(true).optional(),
    received_usd: z.literal(true).optional(),
    currentBtcPrice: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BTC_AddressesCountAggregateInputObjectSchema = Schema;
