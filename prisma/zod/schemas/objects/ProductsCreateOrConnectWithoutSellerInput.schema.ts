import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsCreateWithoutSellerInputObjectSchema } from './ProductsCreateWithoutSellerInput.schema';
import { ProductsUncheckedCreateWithoutSellerInputObjectSchema } from './ProductsUncheckedCreateWithoutSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutSellerInput> = z
  .object({
    where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductsCreateWithoutSellerInputObjectSchema),
      z.lazy(() => ProductsUncheckedCreateWithoutSellerInputObjectSchema),
    ]),
  })
  .strict();

export const ProductsCreateOrConnectWithoutSellerInputObjectSchema = Schema;
