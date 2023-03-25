import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    statisticsId: z.string().optional(),
  })
  .strict();

export const DatabaseWhereUniqueInputObjectSchema = Schema;
