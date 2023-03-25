import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    current: z.string(),
    expiresAt: z.date(),
  })
  .strict();

export const SessionsUncheckedCreateWithoutUserInputObjectSchema = Schema;
