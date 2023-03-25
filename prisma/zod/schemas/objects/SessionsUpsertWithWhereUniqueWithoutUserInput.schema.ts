import { z } from 'zod';
import { SessionsWhereUniqueInputObjectSchema } from './SessionsWhereUniqueInput.schema';
import { SessionsUpdateWithoutUserInputObjectSchema } from './SessionsUpdateWithoutUserInput.schema';
import { SessionsUncheckedUpdateWithoutUserInputObjectSchema } from './SessionsUncheckedUpdateWithoutUserInput.schema';
import { SessionsCreateWithoutUserInputObjectSchema } from './SessionsCreateWithoutUserInput.schema';
import { SessionsUncheckedCreateWithoutUserInputObjectSchema } from './SessionsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SessionsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => SessionsUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SessionsCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionsUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const SessionsUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
