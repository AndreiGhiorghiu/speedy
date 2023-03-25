import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutReferenceInputObjectSchema } from './UserUncheckedUpdateManyWithoutReferenceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutReferenceInput> = z
  .object({
    where: z.lazy(() => UserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyWithoutReferenceInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateManyWithWhereWithoutReferenceInputObjectSchema = Schema;
