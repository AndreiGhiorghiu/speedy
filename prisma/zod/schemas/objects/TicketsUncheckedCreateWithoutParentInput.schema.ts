import { z } from 'zod';
import { TicketsUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './TicketsUncheckedCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUncheckedCreateWithoutParentInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.string(),
    message: z.string(),
    status: z.string(),
    reporterId: z.string(),
    responses: z
      .lazy(
        () => TicketsUncheckedCreateNestedManyWithoutParentInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const TicketsUncheckedCreateWithoutParentInputObjectSchema = Schema;
