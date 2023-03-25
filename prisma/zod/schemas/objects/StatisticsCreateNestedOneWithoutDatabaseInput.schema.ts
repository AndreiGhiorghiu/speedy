import { z } from 'zod';
import { StatisticsCreateWithoutDatabaseInputObjectSchema } from './StatisticsCreateWithoutDatabaseInput.schema';
import { StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema } from './StatisticsUncheckedCreateWithoutDatabaseInput.schema';
import { StatisticsCreateOrConnectWithoutDatabaseInputObjectSchema } from './StatisticsCreateOrConnectWithoutDatabaseInput.schema';
import { StatisticsWhereUniqueInputObjectSchema } from './StatisticsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsCreateNestedOneWithoutDatabaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatisticsCreateWithoutDatabaseInputObjectSchema),
          z.lazy(
            () => StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatisticsCreateOrConnectWithoutDatabaseInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StatisticsWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const StatisticsCreateNestedOneWithoutDatabaseInputObjectSchema = Schema;
