import { z } from 'zod';
import { TicketsScalarWhereInputObjectSchema } from './TicketsScalarWhereInput.schema';
import { TicketsUpdateManyMutationInputObjectSchema } from './TicketsUpdateManyMutationInput.schema';
import { TicketsUncheckedUpdateManyWithoutMy_ticketsInputObjectSchema } from './TicketsUncheckedUpdateManyWithoutMy_ticketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsUpdateManyWithWhereWithoutReporterInput> =
  z
    .object({
      where: z.lazy(() => TicketsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TicketsUncheckedUpdateManyWithoutMy_ticketsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TicketsUpdateManyWithWhereWithoutReporterInputObjectSchema =
  Schema;
