import { z } from 'zod';
import { TicketsCreateWithoutResponsesInputObjectSchema } from './TicketsCreateWithoutResponsesInput.schema';
import { TicketsUncheckedCreateWithoutResponsesInputObjectSchema } from './TicketsUncheckedCreateWithoutResponsesInput.schema';
import { TicketsCreateOrConnectWithoutResponsesInputObjectSchema } from './TicketsCreateOrConnectWithoutResponsesInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './TicketsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsCreateNestedOneWithoutResponsesInput> = z
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
    connect: z.lazy(() => TicketsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TicketsCreateNestedOneWithoutResponsesInputObjectSchema = Schema;
