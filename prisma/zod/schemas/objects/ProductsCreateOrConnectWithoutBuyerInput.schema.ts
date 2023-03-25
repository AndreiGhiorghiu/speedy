import { z } from 'zod';
import { ProductsWhereUniqueInputObjectSchema } from './ProductsWhereUniqueInput.schema';
import { ProductsCreateWithoutBuyerInputObjectSchema } from './ProductsCreateWithoutBuyerInput.schema';
import { ProductsUncheckedCreateWithoutBuyerInputObjectSchema } from './ProductsUncheckedCreateWithoutBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutBuyerInput> = z
  .object({
    where: z.lazy(() => ProductsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductsCreateWithoutBuyerInputObjectSchema),
      z.lazy(() => ProductsUncheckedCreateWithoutBuyerInputObjectSchema),
    ]),
  })
  .strict();

export const ProductsCreateOrConnectWithoutBuyerInputObjectSchema = Schema;
