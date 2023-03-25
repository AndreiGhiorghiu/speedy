import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    ownerId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    status: z.string().optional(),
    statisticsId: z.string().optional().nullable(),
  })
  .strict();

export const DatabaseUncheckedCreateWithoutProductsInputObjectSchema = Schema;
