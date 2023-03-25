import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutParentInputObjectSchema } from './TicketsUpdateWithoutParentInput.schema';
import { TicketsUncheckedUpdateWithoutParentInputObjectSchema } from './TicketsUncheckedUpdateWithoutParentInput.schema';
import { TicketsCreateWithoutParentInputObjectSchema } from './TicketsCreateWithoutParentInput.schema';
import { TicketsUncheckedCreateWithoutParentInputObjectSchema } from './TicketsUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpsertWithWhereUniqueWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TicketsUpdateWithoutParentInputObjectSchema),
        z.lazy(() => TicketsUncheckedUpdateWithoutParentInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TicketsCreateWithoutParentInputObjectSchema),
        z.lazy(() => TicketsUncheckedCreateWithoutParentInputObjectSchema),
      ]),
    })
    .strict();

export const TicketsUpsertWithWhereUniqueWithoutParentInputObjectSchema =
  Schema;
