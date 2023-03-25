import { z } from 'zod';
import { ProductsCreateWithoutSellerInputObjectSchema } from './ProductsCreateWithoutSellerInput.schema';
import { ProductsUncheckedCreateWithoutSellerInputObjectSchema } from './ProductsUncheckedCreateWithoutSellerInput.schema';
import { ProductsCreateOrConnectWithoutSellerInputObjectSchema } from './ProductsCreateOrConnectWithoutSellerInput.schema';
import { ProductsUpsertWithWhereUniqueWithoutSellerInputObjectSchema } from './ProductsUpsertWithWhereUniqueWithoutSellerInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithWhereUniqueWithoutSellerInputObjectSchema } from './ProductsUpdateWithWhereUniqueWithoutSellerInput.schema';
import { ProductsUpdateManyWithWhereWithoutSellerInputObjectSchema } from './ProductsUpdateManyWithWhereWithoutSellerInput.schema';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithoutSellerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProductsUpsertWithWhereUniqueWithoutSellerInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpsertWithWhereUniqueWithoutSellerInputObjectSchema,
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
          () => ProductsUpdateWithWhereUniqueWithoutSellerInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpdateWithWhereUniqueWithoutSellerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductsUpdateManyWithWhereWithoutSellerInputObjectSchema),
        z
          .lazy(() => ProductsUpdateManyWithWhereWithoutSellerInputObjectSchema)
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

export const ProductsUpdateManyWithoutSellerNestedInputObjectSchema = Schema;
