import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    current: z.string(),
    userId: z.string(),
    expiresAt: z.date(),
  })
  .strict();

export const SessionsUncheckedCreateInputObjectSchema = Schema;
