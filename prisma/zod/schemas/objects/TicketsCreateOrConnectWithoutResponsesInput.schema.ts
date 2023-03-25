import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsCreateWithoutResponsesInputObjectSchema } from './TicketsCreateWithoutResponsesInput.schema';
import { TicketsUncheckedCreateWithoutResponsesInputObjectSchema } from './TicketsUncheckedCreateWithoutResponsesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateOrConnectWithoutResponsesInput> = z
  .object({
    where: z.lazy(() => TicketsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TicketsCreateWithoutResponsesInputObjectSchema),
      z.lazy(() => TicketsUncheckedCreateWithoutResponsesInputObjectSchema),
    ]),
  })
  .strict();

export const TicketsCreateOrConnectWithoutResponsesInputObjectSchema = Schema;
