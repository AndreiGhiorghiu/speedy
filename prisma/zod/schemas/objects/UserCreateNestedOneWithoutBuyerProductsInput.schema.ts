import { z } from 'zod';
import { UserCreateWithoutBuyerProductsInputObjectSchema } from './UserCreateWithoutBuyerProductsInput.schema';
import { UserUncheckedCreateWithoutBuyerProductsInputObjectSchema } from './UserUncheckedCreateWithoutBuyerProductsInput.schema';
import { UserCreateOrConnectWithoutBuyerProductsInputObjectSchema } from './UserCreateOrConnectWithoutBuyerProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBuyerProductsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutBuyerProductsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBuyerProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutBuyerProductsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutBuyerProductsInputObjectSchema = Schema;
