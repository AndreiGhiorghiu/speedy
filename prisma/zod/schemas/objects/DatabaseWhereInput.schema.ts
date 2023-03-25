import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';
import { StatisticsRelationFilterObjectSchema } from './StatisticsRelationFilter.schema';
import { StatisticsWhereInputObjectSchema } from './StatisticsWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DatabaseWhereInputObjectSchema),
        z.lazy(() => DatabaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DatabaseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DatabaseWhereInputObjectSchema),
        z.lazy(() => DatabaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional(),
    statistics: z
      .union([
        z.lazy(() => StatisticsRelationFilterObjectSchema),
        z.lazy(() => StatisticsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    statisticsId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const DatabaseWhereInputObjectSchema = Schema;
