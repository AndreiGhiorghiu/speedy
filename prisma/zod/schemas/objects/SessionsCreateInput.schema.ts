import { z } from 'zod';
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsCreateInput> = z
  .object({
    id: z.string().optional(),
    current: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema),
    expiresAt: z.date(),
  })
  .strict();

export const SessionsCreateInputObjectSchema = Schema;
