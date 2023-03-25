import { z } from 'zod';
import { SessionsWhereInputObjectSchema } from './SessionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsListRelationFilter> = z
  .object({
    every: z.lazy(() => SessionsWhereInputObjectSchema).optional(),
    some: z.lazy(() => SessionsWhereInputObjectSchema).optional(),
    none: z.lazy(() => SessionsWhereInputObjectSchema).optional(),
  })
  .strict();

export const SessionsListRelationFilterObjectSchema = Schema;
