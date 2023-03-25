import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutMy_ticketsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutMy_ticketsNestedInput.schema';
import { TicketsUpdateOneWithoutResponsesNestedInputObjectSchema } from './TicketsUpdateOneWithoutResponsesNestedInput.schema';
import { TicketsUpdateManyWithoutParentNestedInputObjectSchema } from './TicketsUpdateManyWithoutParentNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    message: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    reporter: z
      .lazy(() => UserUpdateOneRequiredWithoutMy_ticketsNestedInputObjectSchema)
      .optional(),
    parent: z
      .lazy(() => TicketsUpdateOneWithoutResponsesNestedInputObjectSchema)
      .optional(),
    responses: z
      .lazy(() => TicketsUpdateManyWithoutParentNestedInputObjectSchema)
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

export const TicketsUpdateInputObjectSchema = Schema;
