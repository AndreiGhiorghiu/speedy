import { z } from 'zod';
import { ProductsCreateWithoutUserInputObjectSchema } from './ProductsCreateWithoutUserInput.schema';
import { ProductsUncheckedCreateWithoutUserInputObjectSchema } from './ProductsUncheckedCreateWithoutUserInput.schema';
import { ProductsCreateOrConnectWithoutUserInputObjectSchema } from './ProductsCreateOrConnectWithoutUserInput.schema';
import { ProductsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProductsUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProductsUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProductsUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProductsUpdateManyWithWhereWithoutUserInput.schema';
import { ProductsScalarWhereInputObjectSchema } from './ProductsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ProductsUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => ProductsUpsertWithWhereUniqueWithoutUserInputObjectSchema)
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
        z.lazy(() => ProductsUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => ProductsUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductsUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => ProductsUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const ProductsUpdateManyWithoutUserNestedInputObjectSchema = Schema;
