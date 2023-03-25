import { z } from 'zod';
import { UserCreateNestedOneWithoutMy_ticketsInputObjectSchema } from './UserCreateNestedOneWithoutMy_ticketsInput.schema';
import { TicketsCreateNestedOneWithoutResponsesInputObjectSchema } from './TicketsCreateNestedOneWithoutResponsesInput.schema';
import { TicketsCreateNestedManyWithoutParentInputObjectSchema } from './TicketsCreateNestedManyWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.string(),
    message: z.string(),
    status: z.string(),
    reporter: z.lazy(
      () => UserCreateNestedOneWithoutMy_ticketsInputObjectSchema,
    ),
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

export const TicketsCreateInputObjectSchema = Schema;
