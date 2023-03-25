import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutReporterInputObjectSchema } from './TicketsUpdateWithoutReporterInput.schema';
import { TicketsUncheckedUpdateWithoutReporterInputObjectSchema } from './TicketsUncheckedUpdateWithoutReporterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateWithWhereUniqueWithoutReporterInput> =
  z
    .object({
      where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketsUpdateWithoutReporterInputObjectSchema),
        z.lazy(() => TicketsUncheckedUpdateWithoutReporterInputObjectSchema),
      ]),
    })
    .strict();

export const TicketsUpdateWithWhereUniqueWithoutReporterInputObjectSchema =
  Schema;
