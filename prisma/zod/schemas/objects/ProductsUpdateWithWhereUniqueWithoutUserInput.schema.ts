import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsUpdateWithoutUserInputObjectSchema } from './ProductsUpdateWithoutUserInput.schema';
import { ProductsUncheckedUpdateWithoutUserInputObjectSchema } from './ProductsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProductsUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProductsUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
