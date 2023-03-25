import { z } from 'zod';
import { TicketsCreateWithoutParentInputObjectSchema } from './TicketsCreateWithoutParentInput.schema';
import { TicketsUncheckedCreateWithoutParentInputObjectSchema } from './TicketsUncheckedCreateWithoutParentInput.schema';
import { TicketsCreateOrConnectWithoutParentInputObjectSchema } from './TicketsCreateOrConnectWithoutParentInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateNestedManyWithoutParentInput> = z
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
    connect: z
      .union([
        z.lazy(() => TicketsWhereUniqueInputObjectSchema),
        z.lazy(() => TicketsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TicketsCreateNestedManyWithoutParentInputObjectSchema = Schema;
