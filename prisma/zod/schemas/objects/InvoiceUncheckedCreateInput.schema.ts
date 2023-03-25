import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    code: z.string(),
    total: z.number(),
    status: z.string().optional(),
    userId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const InvoiceUncheckedCreateInputObjectSchema = Schema;
