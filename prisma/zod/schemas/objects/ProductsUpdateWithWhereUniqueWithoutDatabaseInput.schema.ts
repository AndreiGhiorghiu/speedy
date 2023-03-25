import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutDatabaseInputObjectSchema } from './ProductsUpdateWithoutDatabaseInput.schema';
import { ProductsUncheckedUpdateWithoutDatabaseInputObjectSchema } from './ProductsUncheckedUpdateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutDatabaseInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateWithoutDatabaseInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutDatabaseInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpdateWithWhereUniqueWithoutDatabaseInputObjectSchema =
  Schema;
