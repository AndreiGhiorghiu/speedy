import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseCreateWithoutStatisticsInputObjectSchema } from './DatabaseCreateWithoutStatisticsInput.schema';
import { DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema } from './DatabaseUncheckedCreateWithoutStatisticsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseCreateOrConnectWithoutStatisticsInput> =
  z
    .object({
      where: z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DatabaseCreateWithoutStatisticsInputObjectSchema),
        z.lazy(() => DatabaseUncheckedCreateWithoutStatisticsInputObjectSchema),
      ]),
    })
    .strict();

export const DatabaseCreateOrConnectWithoutStatisticsInputObjectSchema = Schema;
