import { z } from 'zod';
import { UserUpdateWithoutBtc_addressesInputObjectSchema } from './UserUpdateWithoutBtc_addressesInput.schema';
import { UserUncheckedUpdateWithoutBtc_addressesInputObjectSchema } from './UserUncheckedUpdateWithoutBtc_addressesInput.schema';
import { UserCreateWithoutBtc_addressesInputObjectSchema } from './UserCreateWithoutBtc_addressesInput.schema';
import { UserUncheckedCreateWithoutBtc_addressesInputObjectSchema } from './UserUncheckedCreateWithoutBtc_addressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBtc_addressesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutBtc_addressesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutBtc_addressesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutBtc_addressesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBtc_addressesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutBtc_addressesInputObjectSchema = Schema;
