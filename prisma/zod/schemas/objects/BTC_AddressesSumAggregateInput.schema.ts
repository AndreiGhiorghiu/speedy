import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesSumAggregateInputType> = z
  .object({
    received_btc: z.literal(true).optional(),
    received_usd: z.literal(true).optional(),
    currentBtcPrice: z.literal(true).optional(),
  })
  .strict();

export const BTC_AddressesSumAggregateInputObjectSchema = Schema;
