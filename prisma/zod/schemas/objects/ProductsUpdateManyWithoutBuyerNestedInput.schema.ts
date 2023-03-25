import { z } from 'zod';
import { ProductsCreateWithoutBuyerInputObjectSchema } from './ProductsCreateWithoutBuyerInput.schema';
import { ProductsUncheckedCreateWithoutBuyerInputObjectSchema } from './ProductsUncheckedCreateWithoutBuyerInput.schema';
import { ProductsCreateOrConnectWithoutBuyerInputObjectSchema } from './ProductsCreateOrConnectWithoutBuyerInput.schema';
import { ProductsUpsertWithWhereUniqueWithoutBuyerInputObjectSchema } from './ProductsUpsertWithWhereUniqueWithoutBuyerInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithWhereUniqueWithoutBuyerInputObjectSchema } from './ProductsUpdateWithWhereUniqueWithoutBuyerInput.schema';
import { ProductsUpdateManyWithWhereWithoutBuyerInputObjectSchema } from './ProductsUpdateManyWithWhereWithoutBuyerInput.schema';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithoutBuyerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProductsUpsertWithWhereUniqueWithoutBuyerInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpsertWithWhereUniqueWithoutBuyerInputObjectSchema,
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
          () => ProductsUpdateWithWhereUniqueWithoutBuyerInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductsUpdateWithWhereUniqueWithoutBuyerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductsUpdateManyWithWhereWithoutBuyerInputObjectSchema),
        z
          .lazy(() => ProductsUpdateManyWithWhereWithoutBuyerInputObjectSchema)
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

export const ProductsUpdateManyWithoutBuyerNestedInputObjectSchema = Schema;
