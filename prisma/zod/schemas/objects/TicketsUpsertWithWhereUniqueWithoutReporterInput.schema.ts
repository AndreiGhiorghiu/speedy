import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutReporterInputObjectSchema } from './TicketsUpdateWithoutReporterInput.schema';
import { TicketsUncheckedUpdateWithoutReporterInputObjectSchema } from './TicketsUncheckedUpdateWithoutReporterInput.schema';
import { TicketsCreateWithoutReporterInputObjectSchema } from './TicketsCreateWithoutReporterInput.schema';
import { TicketsUncheckedCreateWithoutReporterInputObjectSchema } from './TicketsUncheckedCreateWithoutReporterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpsertWithWhereUniqueWithoutReporterInput> =
  z
    .object({
      where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TicketsUpdateWithoutReporterInputObjectSchema),
        z.lazy(() => TicketsUncheckedUpdateWithoutReporterInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TicketsCreateWithoutReporterInputObjectSchema),
        z.lazy(() => TicketsUncheckedCreateWithoutReporterInputObjectSchema),
      ]),
    })
    .strict();

export const TicketsUpsertWithWhereUniqueWithoutReporterInputObjectSchema =
  Schema;
