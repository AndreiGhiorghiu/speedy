import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseCreateWithoutProductsInputObjectSchema } from './DatabaseCreateWithoutProductsInput.schema';
import { DatabaseUncheckedCreateWithoutProductsInputObjectSchema } from './DatabaseUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DatabaseCreateWithoutProductsInputObjectSchema),
      z.lazy(() => DatabaseUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const DatabaseCreateOrConnectWithoutProductsInputObjectSchema = Schema;
