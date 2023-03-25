import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    current: z.string().optional(),
  })
  .strict();

export const SessionsWhereUniqueInputObjectSchema = Schema;
