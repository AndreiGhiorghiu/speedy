import { z } from 'zod';
import { ProductsCreateWithoutBuyerInputObjectSchema } from './ProductsCreateWithoutBuyerInput.schema';
import { ProductsUncheckedCreateWithoutBuyerInputObjectSchema } from './ProductsUncheckedCreateWithoutBuyerInput.schema';
import { ProductsCreateOrConnectWithoutBuyerInputObjectSchema } from './ProductsCreateOrConnectWithoutBuyerInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateNestedManyWithoutBuyerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsCreateWithoutBuyerInputObjectSchema),
          z.lazy(() => ProductsCreateWithoutBuyerInputObjectSchema).array(),
          z.lazy(() => ProductsUncheckedCreateWithoutBuyerInputObjectSchema),
          z
            .lazy(() => ProductsUncheckedCreateWithoutBuyerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductsCreateOrConnectWithoutBuyerInputObjectSchema),
          z
            .lazy(() => ProductsCreateOrConnectWithoutBuyerInputObjectSchema)
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

export const ProductsUncheckedCreateNestedManyWithoutBuyerInputObjectSchema =
  Schema;
