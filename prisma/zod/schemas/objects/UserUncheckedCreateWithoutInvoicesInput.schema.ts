import { z } from 'zod';
import { SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './SettingsUncheckedCreateNestedOneWithoutUserInput.schema';
import { SessionsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionsUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProductsUncheckedCreateNestedManyWithoutSellerInputObjectSchema } from './ProductsUncheckedCreateNestedManyWithoutSellerInput.schema';
import { ProductsUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from './ProductsUncheckedCreateNestedManyWithoutBuyerInput.schema';
import { UserUncheckedCreateNestedManyWithoutReferenceInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutReferenceInput.schema';
import { ProductsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProductsUncheckedCreateNestedManyWithoutUserInput.schema';
import { DatabaseUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './DatabaseUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { TicketsUncheckedCreateNestedManyWithoutReporterInputObjectSchema } from './TicketsUncheckedCreateNestedManyWithoutReporterInput.schema';
import { BTC_AddressesUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutInvoicesInput> = z
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
      .lazy(() => SettingsUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    Sessions: z
      .lazy(() => SessionsUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    SellerProducts: z
      .lazy(
        () => ProductsUncheckedCreateNestedManyWithoutSellerInputObjectSchema,
      )
      .optional(),
    BuyerProducts: z
      .lazy(
        () => ProductsUncheckedCreateNestedManyWithoutBuyerInputObjectSchema,
      )
      .optional(),
    Reference: z
      .lazy(
        () => UserUncheckedCreateNestedManyWithoutReferenceInputObjectSchema,
      )
      .optional(),
    referenceId: z.string().optional().nullable(),
    Products: z
      .lazy(() => ProductsUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Database: z
      .lazy(
        () => DatabaseUncheckedCreateNestedManyWithoutOwnerInputObjectSchema,
      )
      .optional(),
    my_tickets: z
      .lazy(
        () => TicketsUncheckedCreateNestedManyWithoutReporterInputObjectSchema,
      )
      .optional(),
    btc_addresses: z
      .lazy(
        () =>
          BTC_AddressesUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutInvoicesInputObjectSchema = Schema;
