import { z } from 'zod';
import { ProductsCreateWithoutDatabaseInputObjectSchema } from './ProductsCreateWithoutDatabaseInput.schema';
import { ProductsUncheckedCreateWithoutDatabaseInputObjectSchema } from './ProductsUncheckedCreateWithoutDatabaseInput.schema';
import { ProductsCreateOrConnectWithoutDatabaseInputObjectSchema } from './ProductsCreateOrConnectWithoutDatabaseInput.schema';
import { ProductsUpsertWithWhereUniqueWithoutDatabaseInputObjectSchema } from './ProductsUpsertWithWhereUniqueWithoutDatabaseInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithWhereUniqueWithoutDatabaseInputObjectSchema } from './ProductsUpdateWithWhereUniqueWithoutDatabaseInput.schema';
import { ProductsUpdateManyWithWhereWithoutDatabaseInputObjectSchema } from './ProductsUpdateManyWithWhereWithoutDatabaseInput.schema';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithoutDatabaseNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProductsUpsertWithWhereUniqueWithoutDatabaseInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpsertWithWhereUniqueWithoutDatabaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductsWhereUniqueInputObjectSchema),
        z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductsWhereUniqueInputObjectSchema),
        z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductsWhereUniqueInputObjectSchema),
        z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductsWhereUniqueInputObjectSchema),
        z.lazy(() => ProductsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ProductsUpdateWithWhereUniqueWithoutDatabaseInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpdateWithWhereUniqueWithoutDatabaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProductsUpdateManyWithWhereWithoutDatabaseInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpdateManyWithWhereWithoutDatabaseInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductsScalarWhereInputObjectSchema),
        z.lazy(() => ProductsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductsUpdateManyWithoutDatabaseNestedInputObjectSchema = Schema;
