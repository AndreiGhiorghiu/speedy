import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSellerProductsInputObjectSchema } from './UserCreateWithoutSellerProductsInput.schema';
import { UserUncheckedCreateWithoutSellerProductsInputObjectSchema } from './UserUncheckedCreateWithoutSellerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSellerProductsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutSellerProductsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutSellerProductsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutSellerProductsInputObjectSchema = Schema;
