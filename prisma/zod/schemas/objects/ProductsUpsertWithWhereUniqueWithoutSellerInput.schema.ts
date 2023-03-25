import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutSellerInputObjectSchema } from './ProductsUpdateWithoutSellerInput.schema';
import { ProductsUncheckedUpdateWithoutSellerInputObjectSchema } from './ProductsUncheckedUpdateWithoutSellerInput.schema';
import { ProductsCreateWithoutSellerInputObjectSchema } from './ProductsCreateWithoutSellerInput.schema';
import { ProductsUncheckedCreateWithoutSellerInputObjectSchema } from './ProductsUncheckedCreateWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutSellerInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsUpdateWithoutSellerInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutSellerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutSellerInputObjectSchema),
        z.lazy(() => ProductsUncheckedCreateWithoutSellerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpsertWithWhereUniqueWithoutSellerInputObjectSchema =
  Schema;
