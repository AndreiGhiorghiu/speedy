import { z } from 'zod';
import { TicketsCreateWithoutReporterInputObjectSchema } from './TicketsCreateWithoutReporterInput.schema';
import { TicketsUncheckedCreateWithoutReporterInputObjectSchema } from './TicketsUncheckedCreateWithoutReporterInput.schema';
import { TicketsCreateOrConnectWithoutReporterInputObjectSchema } from './TicketsCreateOrConnectWithoutReporterInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateNestedManyWithoutReporterInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TicketsCreateWithoutReporterInputObjectSchema),
        z.lazy(() => TicketsCreateWithoutReporterInputObjectSchema).array(),
        z.lazy(() => TicketsUncheckedCreateWithoutReporterInputObjectSchema),
        z
          .lazy(() => TicketsUncheckedCreateWithoutReporterInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TicketsCreateOrConnectWithoutReporterInputObjectSchema),
        z
          .lazy(() => TicketsCreateOrConnectWithoutReporterInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TicketsWhereUniqueInputObjectSchema),
        z.lazy(() => TicketsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TicketsCreateNestedManyWithoutReporterInputObjectSchema = Schema;
