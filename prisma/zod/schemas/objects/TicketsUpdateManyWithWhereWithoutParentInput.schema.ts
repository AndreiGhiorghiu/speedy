import { z } from 'zod';
import { TicketsScalarWhereInputObjectSchema } from './TicketsScalarWhereInput.schema';
import { TicketsUpdateManyMutationInputObjectSchema } from './TicketsUpdateManyMutationInput.schema';
import { TicketsUncheckedUpdateManyWithoutResponsesInputObjectSchema } from './TicketsUncheckedUpdateManyWithoutResponsesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateManyWithWhereWithoutParentInput> = z
  .object({
    where: z.lazy(() => TicketsScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TicketsUpdateManyMutationInputObjectSchema),
      z.lazy(() => TicketsUncheckedUpdateManyWithoutResponsesInputObjectSchema),
    ]),
  })
  .strict();

export const TicketsUpdateManyWithWhereWithoutParentInputObjectSchema = Schema;
