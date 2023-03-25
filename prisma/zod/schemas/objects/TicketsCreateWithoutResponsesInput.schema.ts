import { z } from 'zod';
import { UserCreateNestedOneWithoutMy_ticketsInputObjectSchema } from './UserCreateNestedOneWithoutMy_ticketsInput.schema';
import { TicketsCreateNestedOneWithoutResponsesInputObjectSchema } from './TicketsCreateNestedOneWithoutResponsesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateWithoutResponsesInput> = z
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
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const TicketsCreateWithoutResponsesInputObjectSchema = Schema;
