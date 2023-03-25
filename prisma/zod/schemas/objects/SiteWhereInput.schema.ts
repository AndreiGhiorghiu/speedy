import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SiteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SiteWhereInputObjectSchema),
        z.lazy(() => SiteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SiteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SiteWhereInputObjectSchema),
        z.lazy(() => SiteWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ballance: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    data: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const SiteWhereInputObjectSchema = Schema;
