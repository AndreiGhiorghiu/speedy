import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutDatabaseInputObjectSchema } from './ProductsUpdateWithoutDatabaseInput.schema';
import { ProductsUncheckedUpdateWithoutDatabaseInputObjectSchema } from './ProductsUncheckedUpdateWithoutDatabaseInput.schema';
import { ProductsCreateWithoutDatabaseInputObjectSchema } from './ProductsCreateWithoutDatabaseInput.schema';
import { ProductsUncheckedCreateWithoutDatabaseInputObjectSchema } from './ProductsUncheckedCreateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutDatabaseInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsUpdateWithoutDatabaseInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutDatabaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutDatabaseInputObjectSchema),
        z.lazy(() => ProductsUncheckedCreateWithoutDatabaseInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpsertWithWhereUniqueWithoutDatabaseInputObjectSchema =
  Schema;
