import { z } from 'zod';
import { TicketsCreateNestedOneWithoutResponsesInputObjectSchema } from './TicketsCreateNestedOneWithoutResponsesInput.schema';
import { TicketsCreateNestedManyWithoutParentInputObjectSchema } from './TicketsCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateWithoutReporterInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.string(),
    message: z.string(),
    status: z.string(),
    parent: z
      .lazy(() => TicketsCreateNestedOneWithoutResponsesInputObjectSchema)
      .optional(),
    responses: z
      .lazy(() => TicketsCreateNestedManyWithoutParentInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const TicketsCreateWithoutReporterInputObjectSchema = Schema;
