import { z } from 'zod';
import { DatabaseUpdateWithoutProductsInputObjectSchema } from './DatabaseUpdateWithoutProductsInput.schema';
import { DatabaseUncheckedUpdateWithoutProductsInputObjectSchema } from './DatabaseUncheckedUpdateWithoutProductsInput.schema';
import { DatabaseCreateWithoutProductsInputObjectSchema } from './DatabaseCreateWithoutProductsInput.schema';
import { DatabaseUncheckedCreateWithoutProductsInputObjectSchema } from './DatabaseUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => DatabaseUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => DatabaseUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DatabaseCreateWithoutProductsInputObjectSchema),
      z.lazy(() => DatabaseUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const DatabaseUpsertWithoutProductsInputObjectSchema = Schema;
