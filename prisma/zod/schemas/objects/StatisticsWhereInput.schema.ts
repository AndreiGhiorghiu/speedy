import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DatabaseRelationFilterObjectSchema } from './DatabaseRelationFilter.schema';
import { DatabaseWhereInputObjectSchema } from './DatabaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StatisticsWhereInputObjectSchema),
        z.lazy(() => StatisticsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StatisticsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StatisticsWhereInputObjectSchema),
        z.lazy(() => StatisticsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    databaseId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Database: z
      .union([
        z.lazy(() => DatabaseRelationFilterObjectSchema),
        z.lazy(() => DatabaseWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    data: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const StatisticsWhereInputObjectSchema = Schema;
