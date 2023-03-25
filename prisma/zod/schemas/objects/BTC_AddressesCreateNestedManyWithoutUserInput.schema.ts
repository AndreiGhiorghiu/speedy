import { z } from 'zod';
import { BTC_AddressesCreateWithoutUserInputObjectSchema } from './BTC_AddressesCreateWithoutUserInput.schema';
import { BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedCreateWithoutUserInput.schema';
import { BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema } from './BTC_AddressesCreateOrConnectWithoutUserInput.schema';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './BTC_AddressesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BTC_AddressesCreateWithoutUserInputObjectSchema),
          z.lazy(() => BTC_AddressesCreateWithoutUserInputObjectSchema).array(),
          z.lazy(
            () => BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BTC_AddressesCreateNestedManyWithoutUserInputObjectSchema = Schema;
