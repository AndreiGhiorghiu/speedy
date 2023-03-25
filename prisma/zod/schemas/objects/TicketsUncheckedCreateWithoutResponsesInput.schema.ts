import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUncheckedCreateWithoutResponsesInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.string(),
    message: z.string(),
    status: z.string(),
    reporterId: z.string(),
    ticketsId: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const TicketsUncheckedCreateWithoutResponsesInputObjectSchema = Schema;
