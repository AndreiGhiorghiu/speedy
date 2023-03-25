import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BTC_AddressesCountOrderByAggregateInputObjectSchema } from './BTC_AddressesCountOrderByAggregateInput.schema';
import { BTC_AddressesAvgOrderByAggregateInputObjectSchema } from './BTC_AddressesAvgOrderByAggregateInput.schema';
import { BTC_AddressesMaxOrderByAggregateInputObjectSchema } from './BTC_AddressesMaxOrderByAggregateInput.schema';
import { BTC_AddressesMinOrderByAggregateInputObjectSchema } from './BTC_AddressesMinOrderByAggregateInput.schema';
import { BTC_AddressesSumOrderByAggregateInputObjectSchema } from './BTC_AddressesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    received_btc: z.lazy(() => SortOrderSchema).optional(),
    received_usd: z.lazy(() => SortOrderSchema).optional(),
    currentBtcPrice: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BTC_AddressesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => BTC_AddressesAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BTC_AddressesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BTC_AddressesMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => BTC_AddressesSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BTC_AddressesOrderByWithAggregationInputObjectSchema = Schema;
