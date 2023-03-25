import { z } from 'zod';
import { UserCreateWithoutBtc_addressesInputObjectSchema } from './UserCreateWithoutBtc_addressesInput.schema';
import { UserUncheckedCreateWithoutBtc_addressesInputObjectSchema } from './UserUncheckedCreateWithoutBtc_addressesInput.schema';
import { UserCreateOrConnectWithoutBtc_addressesInputObjectSchema } from './UserCreateOrConnectWithoutBtc_addressesInput.schema';
import { UserUpsertWithoutBtc_addressesInputObjectSchema } from './UserUpsertWithoutBtc_addressesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBtc_addressesInputObjectSchema } from './UserUpdateWithoutBtc_addressesInput.schema';
import { UserUncheckedUpdateWithoutBtc_addressesInputObjectSchema } from './UserUncheckedUpdateWithoutBtc_addressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBtc_addressesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBtc_addressesInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutBtc_addressesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutBtc_addressesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutBtc_addressesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutBtc_addressesInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutBtc_addressesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBtc_addressesNestedInputObjectSchema =
  Schema;
