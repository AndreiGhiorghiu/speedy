import { z } from 'zod';
import { TicketsCreateWithoutResponsesInputObjectSchema } from './TicketsCreateWithoutResponsesInput.schema';
import { TicketsUncheckedCreateWithoutResponsesInputObjectSchema } from './TicketsUncheckedCreateWithoutResponsesInput.schema';
import { TicketsCreateOrConnectWithoutResponsesInputObjectSchema } from './TicketsCreateOrConnectWithoutResponsesInput.schema';
import { TicketsUpsertWithoutResponsesInputObjectSchema } from './TicketsUpsertWithoutResponsesInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';
import { TicketsUpdateWithoutResponsesInputObjectSchema } from './TicketsUpdateWithoutResponsesInput.schema';
import { TicketsUncheckedUpdateWithoutResponsesInputObjectSchema } from './TicketsUncheckedUpdateWithoutResponsesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateOneWithoutResponsesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TicketsCreateWithoutResponsesInputObjectSchema),
        z.lazy(() => TicketsUncheckedCreateWithoutResponsesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TicketsCreateOrConnectWithoutResponsesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => TicketsUpsertWithoutResponsesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => TicketsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => TicketsUpdateWithoutResponsesInputObjectSchema),
        z.lazy(() => TicketsUncheckedUpdateWithoutResponsesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TicketsUpdateOneWithoutResponsesNestedInputObjectSchema = Schema;
