import { z } from 'zod';
import { SessionsWhereUniqueInputObjectSchema } from './SessionsWhereUniqueInput.schema';
import { SessionsCreateWithoutUserInputObjectSchema } from './SessionsCreateWithoutUserInput.schema';
import { SessionsUncheckedCreateWithoutUserInputObjectSchema } from './SessionsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => SessionsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SessionsCreateWithoutUserInputObjectSchema),
      z.lazy(() => SessionsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SessionsCreateOrConnectWithoutUserInputObjectSchema = Schema;
