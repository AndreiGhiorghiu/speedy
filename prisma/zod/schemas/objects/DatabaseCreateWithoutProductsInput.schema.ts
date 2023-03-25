import { z } from 'zod';
import { UserCreateNestedOneWithoutDatabaseInputObjectSchema } from './UserCreateNestedOneWithoutDatabaseInput.schema';
import { StatisticsCreateNestedOneWithoutDatabaseInputObjectSchema } from './StatisticsCreateNestedOneWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    owner: z.lazy(() => UserCreateNestedOneWithoutDatabaseInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    status: z.string().optional(),
    statistics: z
      .lazy(() => StatisticsCreateNestedOneWithoutDatabaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const DatabaseCreateWithoutProductsInputObjectSchema = Schema;
