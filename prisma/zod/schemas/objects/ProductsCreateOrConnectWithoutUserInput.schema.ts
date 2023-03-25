import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsCreateWithoutUserInputObjectSchema } from './ProductsCreateWithoutUserInput.schema';
import { ProductsUncheckedCreateWithoutUserInputObjectSchema } from './ProductsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductsCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProductsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProductsCreateOrConnectWithoutUserInputObjectSchema = Schema;
