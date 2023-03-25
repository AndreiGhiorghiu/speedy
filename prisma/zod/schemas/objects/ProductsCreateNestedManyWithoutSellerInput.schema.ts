import { z } from 'zod';
import { ProductsCreateWithoutSellerInputObjectSchema } from './ProductsCreateWithoutSellerInput.schema';
import { ProductsUncheckedCreateWithoutSellerInputObjectSchema } from './ProductsUncheckedCreateWithoutSellerInput.schema';
import { ProductsCreateOrConnectWithoutSellerInputObjectSchema } from './ProductsCreateOrConnectWithoutSellerInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateNestedManyWithoutSellerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductsCreateWithoutSellerInputObjectSchema),
        z.lazy(() => ProductsCreateWithoutSellerInputObjectSchema).array(),
        z.lazy(() => ProductsUncheckedCreateWithoutSellerInputObjectSchema),
        z
          .lazy(() => ProductsUncheckedCreateWithoutSellerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductsCreateOrConnectWithoutSellerInputObjectSchema),
        z
          .lazy(() => ProductsCreateOrConnectWithoutSellerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductsWhereUniqueInputObjectSchema),
        z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductsCreateNestedManyWithoutSellerInputObjectSchema = Schema;
