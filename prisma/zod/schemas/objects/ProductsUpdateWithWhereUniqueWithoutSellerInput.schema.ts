import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutSellerInputObjectSchema } from './ProductsUpdateWithoutSellerInput.schema';
import { ProductsUncheckedUpdateWithoutSellerInputObjectSchema } from './ProductsUncheckedUpdateWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutSellerInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateWithoutSellerInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutSellerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpdateWithWhereUniqueWithoutSellerInputObjectSchema =
  Schema;
