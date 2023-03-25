import { z } from 'zod';
import { TicketsUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './TicketsUncheckedCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUncheckedCreateWithoutReporterInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.string(),
    message: z.string(),
    status: z.string(),
    ticketsId: z.string().optional().nullable(),
    responses: z
      .lazy(
        () => TicketsUncheckedCreateNestedManyWithoutParentInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const TicketsUncheckedCreateWithoutReporterInputObjectSchema = Schema;
