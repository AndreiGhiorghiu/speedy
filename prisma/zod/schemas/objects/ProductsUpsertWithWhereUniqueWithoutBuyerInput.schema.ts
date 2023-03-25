import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutBuyerInputObjectSchema } from './ProductsUpdateWithoutBuyerInput.schema';
import { ProductsUncheckedUpdateWithoutBuyerInputObjectSchema } from './ProductsUncheckedUpdateWithoutBuyerInput.schema';
import { ProductsCreateWithoutBuyerInputObjectSchema } from './ProductsCreateWithoutBuyerInput.schema';
import { ProductsUncheckedCreateWithoutBuyerInputObjectSchema } from './ProductsUncheckedCreateWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutBuyerInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsUpdateWithoutBuyerInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutBuyerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutBuyerInputObjectSchema),
        z.lazy(() => ProductsUncheckedCreateWithoutBuyerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpsertWithWhereUniqueWithoutBuyerInputObjectSchema =
  Schema;
