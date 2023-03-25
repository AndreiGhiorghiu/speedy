import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutBuyerInputObjectSchema } from './ProductsUpdateWithoutBuyerInput.schema';
import { ProductsUncheckedUpdateWithoutBuyerInputObjectSchema } from './ProductsUncheckedUpdateWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutBuyerInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateWithoutBuyerInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutBuyerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpdateWithWhereUniqueWithoutBuyerInputObjectSchema =
  Schema;
