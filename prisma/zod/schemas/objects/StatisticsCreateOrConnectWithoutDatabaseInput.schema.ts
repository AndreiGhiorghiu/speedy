import { z } from 'zod';
import { StatisticsWhereUniqueInputObjectSchema } from './StatisticsWhereUniqueInput.schema';
import { StatisticsCreateWithoutDatabaseInputObjectSchema } from './StatisticsCreateWithoutDatabaseInput.schema';
import { StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema } from './StatisticsUncheckedCreateWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatisticsCreateOrConnectWithoutDatabaseInput> =
  z
    .object({
      where: z.lazy(() => StatisticsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StatisticsCreateWithoutDatabaseInputObjectSchema),
        z.lazy(() => StatisticsUncheckedCreateWithoutDatabaseInputObjectSchema),
      ]),
    })
    .strict();

export const StatisticsCreateOrConnectWithoutDatabaseInputObjectSchema = Schema;
