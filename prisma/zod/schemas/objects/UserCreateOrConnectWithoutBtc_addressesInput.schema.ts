import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBtc_addressesInputObjectSchema } from './UserCreateWithoutBtc_addressesInput.schema';
import { UserUncheckedCreateWithoutBtc_addressesInputObjectSchema } from './UserUncheckedCreateWithoutBtc_addressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBtc_addressesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBtc_addressesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBtc_addressesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBtc_addressesInputObjectSchema = Schema;
