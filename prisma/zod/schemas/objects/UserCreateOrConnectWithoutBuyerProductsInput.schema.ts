import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBuyerProductsInputObjectSchema } from './UserCreateWithoutBuyerProductsInput.schema';
import { UserUncheckedCreateWithoutBuyerProductsInputObjectSchema } from './UserUncheckedCreateWithoutBuyerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBuyerProductsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBuyerProductsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBuyerProductsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBuyerProductsInputObjectSchema = Schema;
