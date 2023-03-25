import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './SettingsUncheckedUpdateOneWithoutUserNestedInput.schema';
import { SessionsUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionsUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ProductsUncheckedUpdateManyWithoutSellerNestedInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutSellerNestedInput.schema';
import { ProductsUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutBuyerNestedInput.schema';
import { UserUncheckedUpdateManyWithoutReferenceNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutReferenceNestedInput.schema';
import { ProductsUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutUserNestedInput.schema';
import { DatabaseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './DatabaseUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { TicketsUncheckedUpdateManyWithoutReporterNestedInputObjectSchema } from './TicketsUncheckedUpdateManyWithoutReporterNestedInput.schema';
import { BTC_AddressesUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BTC_AddressesUncheckedUpdateManyWithoutUserNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInvoicesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    ballance: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    secure: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    fee: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    settings: z
      .lazy(() => SettingsUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    Sessions: z
      .lazy(() => SessionsUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    SellerProducts: z
      .lazy(
        () => ProductsUncheckedUpdateManyWithoutSellerNestedInputObjectSchema,
      )
      .optional(),
    BuyerProducts: z
      .lazy(
        () => ProductsUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema,
      )
      .optional(),
    Reference: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutReferenceNestedInputObjectSchema,
      )
      .optional(),
    referenceId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Products: z
      .lazy(() => ProductsUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Database: z
      .lazy(
        () => DatabaseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema,
      )
      .optional(),
    my_tickets: z
      .lazy(
        () => TicketsUncheckedUpdateManyWithoutReporterNestedInputObjectSchema,
      )
      .optional(),
    btc_addresses: z
      .lazy(
        () =>
          BTC_AddressesUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutInvoicesInputObjectSchema = Schema;
