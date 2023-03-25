import { z } from 'zod';
import { ProductsCreateWithoutUserInputObjectSchema } from './ProductsCreateWithoutUserInput.schema';
import { ProductsUncheckedCreateWithoutUserInputObjectSchema } from './ProductsUncheckedCreateWithoutUserInput.schema';
import { ProductsCreateOrConnectWithoutUserInputObjectSchema } from './ProductsCreateOrConnectWithoutUserInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProductsCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ProductsUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ProductsUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductsCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ProductsCreateOrConnectWithoutUserInputObjectSchema)
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

export const ProductsUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
