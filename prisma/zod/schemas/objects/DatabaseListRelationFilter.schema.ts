import { z } from 'zod';
import { DatabaseWhereInputObjectSchema } from './DatabaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseListRelationFilter> = z
  .object({
    every: z.lazy(() => DatabaseWhereInputObjectSchema).optional(),
    some: z.lazy(() => DatabaseWhereInputObjectSchema).optional(),
    none: z.lazy(() => DatabaseWhereInputObjectSchema).optional(),
  })
  .strict();

export const DatabaseListRelationFilterObjectSchema = Schema;
