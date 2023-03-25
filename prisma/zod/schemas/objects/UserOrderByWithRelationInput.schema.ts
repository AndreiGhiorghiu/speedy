import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SettingsOrderByWithRelationInputObjectSchema } from './SettingsOrderByWithRelationInput.schema';
import { SessionsOrderByRelationAggregateInputObjectSchema } from './SessionsOrderByRelationAggregateInput.schema';
import { ProductsOrderByRelationAggregateInputObjectSchema } from './ProductsOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { DatabaseOrderByRelationAggregateInputObjectSchema } from './DatabaseOrderByRelationAggregateInput.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema';
import { TicketsOrderByRelationAggregateInputObjectSchema } from './TicketsOrderByRelationAggregateInput.schema';
import { BTC_AddressesOrderByRelationAggregateInputObjectSchema } from './BTC_AddressesOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    ballance: z.lazy(() => SortOrderSchema).optional(),
    secure: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    fee: z.lazy(() => SortOrderSchema).optional(),
    settings: z
      .lazy(() => SettingsOrderByWithRelationInputObjectSchema)
      .optional(),
    Sessions: z
      .lazy(() => SessionsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    SellerProducts: z
      .lazy(() => ProductsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    BuyerProducts: z
      .lazy(() => ProductsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Reference: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reference: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    referenceId: z.lazy(() => SortOrderSchema).optional(),
    Products: z
      .lazy(() => ProductsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Database: z
      .lazy(() => DatabaseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    my_tickets: z
      .lazy(() => TicketsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    btc_addresses: z
      .lazy(() => BTC_AddressesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
