import { z } from 'zod';
import { UserUpdateWithoutReferenceInputObjectSchema } from './UserUpdateWithoutReferenceInput.schema';
import { UserUncheckedUpdateWithoutReferenceInputObjectSchema } from './UserUncheckedUpdateWithoutReferenceInput.schema';
import { UserCreateWithoutReferenceInputObjectSchema } from './UserCreateWithoutReferenceInput.schema';
import { UserUncheckedCreateWithoutReferenceInputObjectSchema } from './UserUncheckedCreateWithoutReferenceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReferenceInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReferenceInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutReferenceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReferenceInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReferenceInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutReferenceInputObjectSchema = Schema;
