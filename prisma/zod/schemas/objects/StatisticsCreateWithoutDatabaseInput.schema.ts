import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsCreateWithoutDatabaseInput> = z
  .object({
    id: z.string().optional(),
    databaseId: z.string().optional().nullable(),
    data: z.string(),
  })
  .strict();

export const StatisticsCreateWithoutDatabaseInputObjectSchema = Schema;
