import { z } from 'zod';
import { TicketsUpdateWithoutResponsesInputObjectSchema } from './TicketsUpdateWithoutResponsesInput.schema';
import { TicketsUncheckedUpdateWithoutResponsesInputObjectSchema } from './TicketsUncheckedUpdateWithoutResponsesInput.schema';
import { TicketsCreateWithoutResponsesInputObjectSchema } from './TicketsCreateWithoutResponsesInput.schema';
import { TicketsUncheckedCreateWithoutResponsesInputObjectSchema } from './TicketsUncheckedCreateWithoutResponsesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpsertWithoutResponsesInput> = z
  .object({
    update: z.union([
      z.lazy(() => TicketsUpdateWithoutResponsesInputObjectSchema),
      z.lazy(() => TicketsUncheckedUpdateWithoutResponsesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TicketsCreateWithoutResponsesInputObjectSchema),
      z.lazy(() => TicketsUncheckedCreateWithoutResponsesInputObjectSchema),
    ]),
  })
  .strict();

export const TicketsUpsertWithoutResponsesInputObjectSchema = Schema;
