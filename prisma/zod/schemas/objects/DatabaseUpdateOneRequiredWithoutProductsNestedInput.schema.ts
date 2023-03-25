import { z } from 'zod';
import { DatabaseCreateWithoutProductsInputObjectSchema } from './DatabaseCreateWithoutProductsInput.schema';
import { DatabaseUncheckedCreateWithoutProductsInputObjectSchema } from './DatabaseUncheckedCreateWithoutProductsInput.schema';
import { DatabaseCreateOrConnectWithoutProductsInputObjectSchema } from './DatabaseCreateOrConnectWithoutProductsInput.schema';
import { DatabaseUpsertWithoutProductsInputObjectSchema } from './DatabaseUpsertWithoutProductsInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseUpdateWithoutProductsInputObjectSchema } from './DatabaseUpdateWithoutProductsInput.schema';
import { DatabaseUncheckedUpdateWithoutProductsInputObjectSchema } from './DatabaseUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpdateOneRequiredWithoutProductsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DatabaseCreateWithoutProductsInputObjectSchema),
          z.lazy(() => DatabaseUncheckedCreateWithoutProductsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DatabaseCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DatabaseUpsertWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DatabaseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DatabaseUpdateWithoutProductsInputObjectSchema),
          z.lazy(() => DatabaseUncheckedUpdateWithoutProductsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const DatabaseUpdateOneRequiredWithoutProductsNestedInputObjectSchema =
  Schema;
