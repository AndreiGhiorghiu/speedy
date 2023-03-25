import { z } from 'zod';
import { ProductsCreateWithoutDatabaseInputObjectSchema } from './ProductsCreateWithoutDatabaseInput.schema';
import { ProductsUncheckedCreateWithoutDatabaseInputObjectSchema } from './ProductsUncheckedCreateWithoutDatabaseInput.schema';
import { ProductsCreateOrConnectWithoutDatabaseInputObjectSchema } from './ProductsCreateOrConnectWithoutDatabaseInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateNestedManyWithoutDatabaseInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductsCreateWithoutDatabaseInputObjectSchema),
        z.lazy(() => ProductsCreateWithoutDatabaseInputObjectSchema).array(),
        z.lazy(() => ProductsUncheckedCreateWithoutDatabaseInputObjectSchema),
        z
          .lazy(() => ProductsUncheckedCreateWithoutDatabaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductsCreateOrConnectWithoutDatabaseInputObjectSchema),
        z
          .lazy(() => ProductsCreateOrConnectWithoutDatabaseInputObjectSchema)
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

export const ProductsCreateNestedManyWithoutDatabaseInputObjectSchema = Schema;
