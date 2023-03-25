import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutParentInputObjectSchema } from './TicketsUpdateWithoutParentInput.schema';
import { TicketsUncheckedUpdateWithoutParentInputObjectSchema } from './TicketsUncheckedUpdateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateWithWhereUniqueWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketsUpdateWithoutParentInputObjectSchema),
        z.lazy(() => TicketsUncheckedUpdateWithoutParentInputObjectSchema),
      ]),
    })
    .strict();

export const TicketsUpdateWithWhereUniqueWithoutParentInputObjectSchema =
  Schema;
