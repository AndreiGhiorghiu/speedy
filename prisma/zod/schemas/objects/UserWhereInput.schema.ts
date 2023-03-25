import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { SettingsRelationFilterObjectSchema } from './SettingsRelationFilter.schema';
import { SettingsWhereInputObjectSchema } from './SettingsWhereInput.schema';
import { SessionsListRelationFilterObjectSchema } from './SessionsListRelationFilter.schema';
import { ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { DatabaseListRelationFilterObjectSchema } from './DatabaseListRelationFilter.schema';
import { InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema';
import { TicketsListRelationFilterObjectSchema } from './TicketsListRelationFilter.schema';
import { BTC_AddressesListRelationFilterObjectSchema } from './BTC_AddressesListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    username: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ballance: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    secure: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fee: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    settings: z
      .union([
        z.lazy(() => SettingsRelationFilterObjectSchema),
        z.lazy(() => SettingsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Sessions: z.lazy(() => SessionsListRelationFilterObjectSchema).optional(),
    SellerProducts: z
      .lazy(() => ProductsListRelationFilterObjectSchema)
      .optional(),
    BuyerProducts: z
      .lazy(() => ProductsListRelationFilterObjectSchema)
      .optional(),
    Reference: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    reference: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    referenceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional(),
    Database: z.lazy(() => DatabaseListRelationFilterObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
    my_tickets: z.lazy(() => TicketsListRelationFilterObjectSchema).optional(),
    btc_addresses: z
      .lazy(() => BTC_AddressesListRelationFilterObjectSchema)
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
