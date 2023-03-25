import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsCreateWithoutReporterInputObjectSchema } from './TicketsCreateWithoutReporterInput.schema';
import { TicketsUncheckedCreateWithoutReporterInputObjectSchema } from './TicketsUncheckedCreateWithoutReporterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateOrConnectWithoutReporterInput> = z
  .object({
    where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TicketsCreateWithoutReporterInputObjectSchema),
      z.lazy(() => TicketsUncheckedCreateWithoutReporterInputObjectSchema),
    ]),
  })
  .strict();

export const TicketsCreateOrConnectWithoutReporterInputObjectSchema = Schema;
