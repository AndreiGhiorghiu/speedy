import { z } from 'zod';
import { DatabaseCreateWithoutProductsInputObjectSchema } from './DatabaseCreateWithoutProductsInput.schema';
import { DatabaseUncheckedCreateWithoutProductsInputObjectSchema } from './DatabaseUncheckedCreateWithoutProductsInput.schema';
import { DatabaseCreateOrConnectWithoutProductsInputObjectSchema } from './DatabaseCreateOrConnectWithoutProductsInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseCreateNestedOneWithoutProductsInput> = z
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
    connect: z.lazy(() => DatabaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DatabaseCreateNestedOneWithoutProductsInputObjectSchema = Schema;
