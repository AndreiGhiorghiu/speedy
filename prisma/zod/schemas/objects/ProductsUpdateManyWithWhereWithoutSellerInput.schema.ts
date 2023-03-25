import { z } from 'zod';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';
import { ProductsUpdateManyMutationInputObjectSchema } from './ProductsUpdateManyMutationInput.schema';
import { ProductsUncheckedUpdateManyWithoutSellerProductsInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutSellerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutSellerInput> =
  z
    .object({
      where: z.lazy(() => ProductsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductsUncheckedUpdateManyWithoutSellerProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsUpdateManyWithWhereWithoutSellerInputObjectSchema = Schema;
