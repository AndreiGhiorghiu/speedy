import { z } from 'zod';
import { UserCreateWithoutSellerProductsInputObjectSchema } from './UserCreateWithoutSellerProductsInput.schema';
import { UserUncheckedCreateWithoutSellerProductsInputObjectSchema } from './UserUncheckedCreateWithoutSellerProductsInput.schema';
import { UserCreateOrConnectWithoutSellerProductsInputObjectSchema } from './UserCreateOrConnectWithoutSellerProductsInput.schema';
import { UserUpsertWithoutSellerProductsInputObjectSchema } from './UserUpsertWithoutSellerProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSellerProductsInputObjectSchema } from './UserUpdateWithoutSellerProductsInput.schema';
import { UserUncheckedUpdateWithoutSellerProductsInputObjectSchema } from './UserUncheckedUpdateWithoutSellerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSellerProductsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSellerProductsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutSellerProductsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSellerProductsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutSellerProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutSellerProductsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutSellerProductsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSellerProductsNestedInputObjectSchema =
  Schema;
