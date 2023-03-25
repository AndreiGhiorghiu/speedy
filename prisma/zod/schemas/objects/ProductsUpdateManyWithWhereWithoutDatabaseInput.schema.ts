import { z } from 'zod';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';
import { ProductsUpdateManyMutationInputObjectSchema } from './ProductsUpdateManyMutationInput.schema';
import { ProductsUncheckedUpdateManyWithoutProductsInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutDatabaseInput> =
  z
    .object({
      where: z.lazy(() => ProductsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProductsUncheckedUpdateManyWithoutProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsUpdateManyWithWhereWithoutDatabaseInputObjectSchema =
  Schema;
