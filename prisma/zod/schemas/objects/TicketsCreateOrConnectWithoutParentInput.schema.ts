import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsCreateWithoutParentInputObjectSchema } from './TicketsCreateWithoutParentInput.schema';
import { TicketsUncheckedCreateWithoutParentInputObjectSchema } from './TicketsUncheckedCreateWithoutParentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateOrConnectWithoutParentInput> = z
  .object({
    where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TicketsCreateWithoutParentInputObjectSchema),
      z.lazy(() => TicketsUncheckedCreateWithoutParentInputObjectSchema),
    ]),
  })
  .strict();

export const TicketsCreateOrConnectWithoutParentInputObjectSchema = Schema;
