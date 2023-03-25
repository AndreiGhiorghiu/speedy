import { z } from 'zod';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesUpdateWithoutUserInputObjectSchema } from './BTC_AddressesUpdateWithoutUserInput.schema';
import { BTC_AddressesUncheckedUpdateWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedUpdateWithoutUserInput.schema';
import { BTC_AddressesCreateWithoutUserInputObjectSchema } from './BTC_AddressesCreateWithoutUserInput.schema';
import { BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BTC_AddressesUpdateWithoutUserInputObjectSchema),
        z.lazy(() => BTC_AddressesUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BTC_AddressesCreateWithoutUserInputObjectSchema),
        z.lazy(() => BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const BTC_AddressesUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
