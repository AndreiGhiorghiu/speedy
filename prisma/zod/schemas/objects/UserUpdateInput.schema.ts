import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { SettingsUpdateOneWithoutUserNestedInputObjectSchema } from './SettingsUpdateOneWithoutUserNestedInput.schema';
import { SessionsUpdateManyWithoutUserNestedInputObjectSchema } from './SessionsUpdateManyWithoutUserNestedInput.schema';
import { ProductsUpdateManyWithoutSellerNestedInputObjectSchema } from './ProductsUpdateManyWithoutSellerNestedInput.schema';
import { ProductsUpdateManyWithoutBuyerNestedInputObjectSchema } from './ProductsUpdateManyWithoutBuyerNestedInput.schema';
import { UserUpdateManyWithoutReferenceNestedInputObjectSchema } from './UserUpdateManyWithoutReferenceNestedInput.schema';
import { UserUpdateOneWithoutReferenceNestedInputObjectSchema } from './UserUpdateOneWithoutReferenceNestedInput.schema';
import { ProductsUpdateManyWithoutUserNestedInputObjectSchema } from './ProductsUpdateManyWithoutUserNestedInput.schema';
import { DatabaseUpdateManyWithoutOwnerNestedInputObjectSchema } from './DatabaseUpdateManyWithoutOwnerNestedInput.schema';
import { InvoiceUpdateManyWithoutUserNestedInputObjectSchema } from './InvoiceUpdateManyWithoutUserNestedInput.schema';
import { TicketsUpdateManyWithoutReporterNestedInputObjectSchema } from './TicketsUpdateManyWithoutReporterNestedInput.schema';
import { BTC_AddressesUpdateManyWithoutUserNestedInputObjectSchema } from './BTC_AddressesUpdateManyWithoutUserNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
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
      .lazy(() => SettingsUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    Sessions: z
      .lazy(() => SessionsUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    SellerProducts: z
      .lazy(() => ProductsUpdateManyWithoutSellerNestedInputObjectSchema)
      .optional(),
    BuyerProducts: z
      .lazy(() => ProductsUpdateManyWithoutBuyerNestedInputObjectSchema)
      .optional(),
    Reference: z
      .lazy(() => UserUpdateManyWithoutReferenceNestedInputObjectSchema)
      .optional(),
    reference: z
      .lazy(() => UserUpdateOneWithoutReferenceNestedInputObjectSchema)
      .optional(),
    Products: z
      .lazy(() => ProductsUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Database: z
      .lazy(() => DatabaseUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    my_tickets: z
      .lazy(() => TicketsUpdateManyWithoutReporterNestedInputObjectSchema)
      .optional(),
    btc_addresses: z
      .lazy(() => BTC_AddressesUpdateManyWithoutUserNestedInputObjectSchema)
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

export const UserUpdateInputObjectSchema = Schema;
