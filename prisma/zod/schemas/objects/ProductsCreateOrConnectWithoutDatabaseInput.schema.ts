import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsCreateWithoutDatabaseInputObjectSchema } from './ProductsCreateWithoutDatabaseInput.schema';
import { ProductsUncheckedCreateWithoutDatabaseInputObjectSchema } from './ProductsUncheckedCreateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutDatabaseInput> = z
  .object({
    where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductsCreateWithoutDatabaseInputObjectSchema),
      z.lazy(() => ProductsUncheckedCreateWithoutDatabaseInputObjectSchema),
    ]),
  })
  .strict();

export const ProductsCreateOrConnectWithoutDatabaseInputObjectSchema = Schema;
