import { z } from 'zod';
import { UserCreateWithoutBuyerProductsInputObjectSchema } from './UserCreateWithoutBuyerProductsInput.schema';
import { UserUncheckedCreateWithoutBuyerProductsInputObjectSchema } from './UserUncheckedCreateWithoutBuyerProductsInput.schema';
import { UserCreateOrConnectWithoutBuyerProductsInputObjectSchema } from './UserCreateOrConnectWithoutBuyerProductsInput.schema';
import { UserUpsertWithoutBuyerProductsInputObjectSchema } from './UserUpsertWithoutBuyerProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBuyerProductsInputObjectSchema } from './UserUpdateWithoutBuyerProductsInput.schema';
import { UserUncheckedUpdateWithoutBuyerProductsInputObjectSchema } from './UserUncheckedUpdateWithoutBuyerProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutBuyerProductsNestedInput> = z
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
    upsert: z
      .lazy(() => UserUpsertWithoutBuyerProductsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutBuyerProductsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBuyerProductsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutBuyerProductsNestedInputObjectSchema = Schema;
