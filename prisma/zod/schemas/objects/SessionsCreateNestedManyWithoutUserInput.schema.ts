import { z } from 'zod';
import { SessionsCreateWithoutUserInputObjectSchema } from './SessionsCreateWithoutUserInput.schema';
import { SessionsUncheckedCreateWithoutUserInputObjectSchema } from './SessionsUncheckedCreateWithoutUserInput.schema';
import { SessionsCreateOrConnectWithoutUserInputObjectSchema } from './SessionsCreateOrConnectWithoutUserInput.schema';
import { SessionsWhereUniqueInputObjectSchema } from './SessionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionsCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionsCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => SessionsUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => SessionsUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionsCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => SessionsCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionsWhereUniqueInputObjectSchema),
        z.lazy(() => SessionsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SessionsCreateNestedManyWithoutUserInputObjectSchema = Schema;
