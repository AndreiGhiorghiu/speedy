import { z } from 'zod';
import { TicketsWhereInputObjectSchema } from './TicketsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsListRelationFilter> = z
  .object({
    every: z.lazy(() => TicketsWhereInputObjectSchema).optional(),
    some: z.lazy(() => TicketsWhereInputObjectSchema).optional(),
    none: z.lazy(() => TicketsWhereInputObjectSchema).optional(),
  })
  .strict();

export const TicketsListRelationFilterObjectSchema = Schema;
