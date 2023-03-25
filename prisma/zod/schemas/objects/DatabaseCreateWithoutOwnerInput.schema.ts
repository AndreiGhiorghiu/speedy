import { z } from 'zod';
import { ProductsCreateNestedManyWithoutDatabaseInputObjectSchema } from './ProductsCreateNestedManyWithoutDatabaseInput.schema';
import { StatisticsCreateNestedOneWithoutDatabaseInputObjectSchema } from './StatisticsCreateNestedOneWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    status: z.string().optional(),
    products: z
      .lazy(() => ProductsCreateNestedManyWithoutDatabaseInputObjectSchema)
      .optional(),
    statistics: z
      .lazy(() => StatisticsCreateNestedOneWithoutDatabaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const DatabaseCreateWithoutOwnerInputObjectSchema = Schema;
