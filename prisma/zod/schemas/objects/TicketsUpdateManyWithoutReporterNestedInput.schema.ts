import { z } from 'zod';
import { TicketsCreateWithoutReporterInputObjectSchema } from './TicketsCreateWithoutReporterInput.schema';
import { TicketsUncheckedCreateWithoutReporterInputObjectSchema } from './TicketsUncheckedCreateWithoutReporterInput.schema';
import { TicketsCreateOrConnectWithoutReporterInputObjectSchema } from './TicketsCreateOrConnectWithoutReporterInput.schema';
import { TicketsUpsertWithWhereUniqueWithoutReporterInputObjectSchema } from './TicketsUpsertWithWhereUniqueWithoutReporterInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithWhereUniqueWithoutReporterInputObjectSchema } from './TicketsUpdateWithWhereUniqueWithoutReporterInput.schema';
import { TicketsUpdateManyWithWhereWithoutReporterInputObjectSchema } from './TicketsUpdateManyWithWhereWithoutReporterInput.schema';
import { TicketsScalarWhereInputObjectSchema } from './TicketsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateManyWithoutReporterNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => TicketsUpsertWithWhereUniqueWithoutReporterInputObjectSchema,
        ),
        z
          .lazy(
            () => TicketsUpsertWithWhereUniqueWithoutReporterInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => TicketsWhereUniqueInputObjectSchema),
        z.lazy(() => TicketsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TicketsWhereUniqueInputObjectSchema),
        z.lazy(() => TicketsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TicketsWhereUniqueInputObjectSchema),
        z.lazy(() => TicketsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TicketsWhereUniqueInputObjectSchema),
        z.lazy(() => TicketsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => TicketsUpdateWithWhereUniqueWithoutReporterInputObjectSchema,
        ),
        z
          .lazy(
            () => TicketsUpdateWithWhereUniqueWithoutReporterInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => TicketsUpdateManyWithWhereWithoutReporterInputObjectSchema,
        ),
        z
          .lazy(
            () => TicketsUpdateManyWithWhereWithoutReporterInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TicketsScalarWhereInputObjectSchema),
        z.lazy(() => TicketsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TicketsUpdateManyWithoutReporterNestedInputObjectSchema = Schema;
