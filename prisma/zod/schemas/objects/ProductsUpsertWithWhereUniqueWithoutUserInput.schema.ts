import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutUserInputObjectSchema } from './ProductsUpdateWithoutUserInput.schema';
import { ProductsUncheckedUpdateWithoutUserInputObjectSchema } from './ProductsUncheckedUpdateWithoutUserInput.schema';
import { ProductsCreateWithoutUserInputObjectSchema } from './ProductsCreateWithoutUserInput.schema';
import { ProductsUncheckedCreateWithoutUserInputObjectSchema } from './ProductsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductsCreateWithoutUserInputObjectSchema),
        z.lazy(() => ProductsUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
