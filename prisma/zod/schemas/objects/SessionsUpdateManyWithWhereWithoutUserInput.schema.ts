import { z } from 'zod';
import { SessionsScalarWhereInputObjectSchema } from './SessionsScalarWhereInput.schema';
import { SessionsUpdateManyMutationInputObjectSchema } from './SessionsUpdateManyMutationInput.schema';
import { SessionsUncheckedUpdateManyWithoutSessionsInputObjectSchema } from './SessionsUncheckedUpdateManyWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => SessionsScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SessionsUpdateManyMutationInputObjectSchema),
      z.lazy(() => SessionsUncheckedUpdateManyWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const SessionsUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
