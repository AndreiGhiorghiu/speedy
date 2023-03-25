import { z } from 'zod';
import { DatabaseWhereInputObjectSchema } from './DatabaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseRelationFilter> = z
  .object({
    is: z
      .lazy(() => DatabaseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DatabaseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DatabaseRelationFilterObjectSchema = Schema;
