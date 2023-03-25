import { z } from 'zod';
import { UserCreateWithoutBtc_addressesInputObjectSchema } from './UserCreateWithoutBtc_addressesInput.schema';
import { UserUncheckedCreateWithoutBtc_addressesInputObjectSchema } from './UserUncheckedCreateWithoutBtc_addressesInput.schema';
import { UserCreateOrConnectWithoutBtc_addressesInputObjectSchema } from './UserCreateOrConnectWithoutBtc_addressesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBtc_addressesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutBtc_addressesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBtc_addressesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutBtc_addressesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutBtc_addressesInputObjectSchema = Schema;
