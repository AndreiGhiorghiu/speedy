import { z } from 'zod';
import { UserUpdateWithoutBuyerProductsInputObjectSchema } from './UserUpdateWithoutBuyerProductsInput.schema';
import { UserUncheckedUpdateWithoutBuyerProductsInputObjectSchema } from './UserUncheckedUpdateWithoutBuyerProductsInput.schema';
import { UserCreateWithoutBuyerProductsInputObjectSchema } from './UserCreateWithoutBuyerProductsInput.schema';
import { UserUncheckedCreateWithoutBuyerProductsInputObjectSchema } from './UserUncheckedCreateWithoutBuyerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBuyerProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutBuyerProductsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutBuyerProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutBuyerProductsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBuyerProductsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutBuyerProductsInputObjectSchema = Schema;
