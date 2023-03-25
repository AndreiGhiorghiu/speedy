import { z } from 'zod';
import { SettingsCreateNestedOneWithoutUserInputObjectSchema } from './SettingsCreateNestedOneWithoutUserInput.schema';
import { SessionsCreateNestedManyWithoutUserInputObjectSchema } from './SessionsCreateNestedManyWithoutUserInput.schema';
import { ProductsCreateNestedManyWithoutBuyerInputObjectSchema } from './ProductsCreateNestedManyWithoutBuyerInput.schema';
import { UserCreateNestedManyWithoutReferenceInputObjectSchema } from './UserCreateNestedManyWithoutReferenceInput.schema';
import { UserCreateNestedOneWithoutReferenceInputObjectSchema } from './UserCreateNestedOneWithoutReferenceInput.schema';
import { ProductsCreateNestedManyWithoutUserInputObjectSchema } from './ProductsCreateNestedManyWithoutUserInput.schema';
import { DatabaseCreateNestedManyWithoutOwnerInputObjectSchema } from './DatabaseCreateNestedManyWithoutOwnerInput.schema';
import { InvoiceCreateNestedManyWithoutUserInputObjectSchema } from './InvoiceCreateNestedManyWithoutUserInput.schema';
import { TicketsCreateNestedManyWithoutReporterInputObjectSchema } from './TicketsCreateNestedManyWithoutReporterInput.schema';
import { BTC_AddressesCreateNestedManyWithoutUserInputObjectSchema } from './BTC_AddressesCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutSellerProductsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    username: z.string(),
    role: z.string(),
    password: z.string(),
    ballance: z.number().optional().nullable(),
    secure: z.boolean().optional().nullable(),
    status: z.string().optional().nullable(),
    fee: z.number().optional().nullable(),
    settings: z
      .lazy(() => SettingsCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    Sessions: z
      .lazy(() => SessionsCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    BuyerProducts: z
      .lazy(() => ProductsCreateNestedManyWithoutBuyerInputObjectSchema)
      .optional(),
    Reference: z
      .lazy(() => UserCreateNestedManyWithoutReferenceInputObjectSchema)
      .optional(),
    reference: z
      .lazy(() => UserCreateNestedOneWithoutReferenceInputObjectSchema)
      .optional(),
    Products: z
      .lazy(() => ProductsCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Database: z
      .lazy(() => DatabaseCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    my_tickets: z
      .lazy(() => TicketsCreateNestedManyWithoutReporterInputObjectSchema)
      .optional(),
    btc_addresses: z
      .lazy(() => BTC_AddressesCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserCreateWithoutSellerProductsInputObjectSchema = Schema;
