import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductsUpdateManyWithoutDatabaseNestedInputObjectSchema } from './ProductsUpdateManyWithoutDatabaseNestedInput.schema';
import { StatisticsUpdateOneWithoutDatabaseNestedInputObjectSchema } from './StatisticsUpdateOneWithoutDatabaseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpdateWithoutOwnerInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
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
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    products: z
      .lazy(() => ProductsUpdateManyWithoutDatabaseNestedInputObjectSchema)
      .optional(),
    statistics: z
      .lazy(() => StatisticsUpdateOneWithoutDatabaseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DatabaseUpdateWithoutOwnerInputObjectSchema = Schema;