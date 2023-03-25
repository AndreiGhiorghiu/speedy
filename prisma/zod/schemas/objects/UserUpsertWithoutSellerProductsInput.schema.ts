import { z } from 'zod';
import { UserUpdateWithoutSellerProductsInputObjectSchema } from './UserUpdateWithoutSellerProductsInput.schema';
import { UserUncheckedUpdateWithoutSellerProductsInputObjectSchema } from './UserUncheckedUpdateWithoutSellerProductsInput.schema';
import { UserCreateWithoutSellerProductsInputObjectSchema } from './UserCreateWithoutSellerProductsInput.schema';
import { UserUncheckedCreateWithoutSellerProductsInputObjectSchema } from './UserUncheckedCreateWithoutSellerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutSellerProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutSellerProductsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutSellerProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutSellerProductsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSellerProductsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutSellerProductsInputObjectSchema = Schema;
