import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesSumOrderByAggregateInput> = z
  .object({
    received_btc: z.lazy(() => SortOrderSchema).optional(),
    received_usd: z.lazy(() => SortOrderSchema).optional(),
    currentBtcPrice: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BTC_AddressesSumOrderByAggregateInputObjectSchema = Schema;
