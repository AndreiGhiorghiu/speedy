import { z } from 'zod';
import { UserCreateWithoutSellerProductsInputObjectSchema } from './UserCreateWithoutSellerProductsInput.schema';
import { UserUncheckedCreateWithoutSellerProductsInputObjectSchema } from './UserUncheckedCreateWithoutSellerProductsInput.schema';
import { UserCreateOrConnectWithoutSellerProductsInputObjectSchema } from './UserCreateOrConnectWithoutSellerProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSellerProductsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutSellerProductsInputObjectSchema = Schema;
