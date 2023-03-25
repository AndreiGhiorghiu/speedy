import { z } from 'zod';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';
import { ProductsUpdateManyMutationInputObjectSchema } from './ProductsUpdateManyMutationInput.schema';
import { ProductsUncheckedUpdateManyWithoutBuyerProductsInputObjectSchema } from './ProductsUncheckedUpdateManyWithoutBuyerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutBuyerInput> = z
  .object({
    where: z.lazy(() => ProductsScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProductsUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => ProductsUncheckedUpdateManyWithoutBuyerProductsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProductsUpdateManyWithWhereWithoutBuyerInputObjectSchema = Schema;
