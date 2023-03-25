import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReferenceInputObjectSchema } from './UserUpdateWithoutReferenceInput.schema';
import { UserUncheckedUpdateWithoutReferenceInputObjectSchema } from './UserUncheckedUpdateWithoutReferenceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutReferenceInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutReferenceInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutReferenceInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutReferenceInputObjectSchema =
  Schema;
