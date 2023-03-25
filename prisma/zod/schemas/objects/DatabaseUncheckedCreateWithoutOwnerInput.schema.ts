import { z } from 'zod';
import { ProductsUncheckedCreateNestedManyWithoutDatabaseInputObjectSchema } from './ProductsUncheckedCreateNestedManyWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    status: z.string().optional(),
    products: z
      .lazy(
        () => ProductsUncheckedCreateNestedManyWithoutDatabaseInputObjectSchema,
      )
      .optional(),
    statisticsId: z.string().optional().nullable(),
  })
  .strict();

export const DatabaseUncheckedCreateWithoutOwnerInputObjectSchema = Schema;
