import { z } from 'zod';
import { DatabaseCreateWithoutStatisticsInputObjectSchema } from './DatabaseCreateWithoutStatisticsInput.schema';
import { DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedCreateWithoutStatisticsInput.schema';
import { DatabaseCreateOrConnectWithoutStatisticsInputObjectSchema } from './DatabaseCreateOrConnectWithoutStatisticsInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedCreateNestedOneWithoutStatisticsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DatabaseCreateWithoutStatisticsInputObjectSchema),
          z.lazy(
            () => DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DatabaseCreateOrConnectWithoutStatisticsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DatabaseWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const DatabaseUncheckedCreateNestedOneWithoutStatisticsInputObjectSchema =
  Schema;
