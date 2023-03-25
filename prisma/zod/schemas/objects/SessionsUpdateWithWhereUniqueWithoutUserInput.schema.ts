import { z } from 'zod';
import { SessionsWhereUniqueInputObjectSchema } from './SessionsWhereUniqueInput.schema';
import { SessionsUpdateWithoutUserInputObjectSchema } from './SessionsUpdateWithoutUserInput.schema';
import { SessionsUncheckedUpdateWithoutUserInputObjectSchema } from './SessionsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SessionsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => SessionsUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const SessionsUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
