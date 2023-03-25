import { z } from 'zod';
import { TicketsWhereInputObjectSchema } from './TicketsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsRelationFilter> = z
  .object({
    is: z
      .lazy(() => TicketsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TicketsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TicketsRelationFilterObjectSchema = Schema;
