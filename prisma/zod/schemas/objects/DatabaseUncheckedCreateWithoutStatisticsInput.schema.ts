import { z } from 'zod';
import { ProductsUncheckedCreateNestedManyWithoutDatabaseInputObjectSchema } from './ProductsUncheckedCreateNestedManyWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedCreateWithoutStatisticsInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      ownerId: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      status: z.string().optional(),
      products: z
        .lazy(
          () =>
            ProductsUncheckedCreateNestedManyWithoutDatabaseInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema = Schema;
