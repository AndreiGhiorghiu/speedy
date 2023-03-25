import { z } from 'zod';
import { TicketsCreateWithoutParentInputObjectSchema } from './TicketsCreateWithoutParentInput.schema';
import { TicketsUncheckedCreateWithoutParentInputObjectSchema } from './TicketsUncheckedCreateWithoutParentInput.schema';
import { TicketsCreateOrConnectWithoutParentInputObjectSchema } from './TicketsCreateOrConnectWithoutParentInput.schema';
import { TicketsUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './TicketsUpsertWithWhereUniqueWithoutParentInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './TicketsUpdateWithWhereUniqueWithoutParentInput.schema';
import { TicketsUpdateManyWithWhereWithoutParentInputObjectSchema } from './TicketsUpdateManyWithWhereWithoutParentInput.schema';
import { TicketsScalarWhereInputObjectSchema } from './TicketsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUncheckedUpdateManyWithoutParentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TicketsCreateWithoutParentInputObjectSchema),
          z.lazy(() => TicketsCreateWithoutParentInputObjectSchema).array(),
          z.lazy(() => TicketsUncheckedCreateWithoutParentInputObjectSchema),
          z
            .lazy(() => TicketsUncheckedCreateWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TicketsCreateOrConnectWithoutParentInputObjectSchema),
          z
            .lazy(() => TicketsCreateOrConnectWithoutParentInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TicketsUpsertWithWhereUniqueWithoutParentInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketsUpsertWithWhereUniqueWithoutParentInputObjectSchema,
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
            () => TicketsUpdateWithWhereUniqueWithoutParentInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketsUpdateWithWhereUniqueWithoutParentInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TicketsUpdateManyWithWhereWithoutParentInputObjectSchema,
          ),
          z
            .lazy(
              () => TicketsUpdateManyWithWhereWithoutParentInputObjectSchema,
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

export const TicketsUncheckedUpdateManyWithoutParentNestedInputObjectSchema =
  Schema;
