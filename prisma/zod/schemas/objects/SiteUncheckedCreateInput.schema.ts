import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SiteUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    ballance: z.number(),
    data: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const SiteUncheckedCreateInputObjectSchema = Schema;
