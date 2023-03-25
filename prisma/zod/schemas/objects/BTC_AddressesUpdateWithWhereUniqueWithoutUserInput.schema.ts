import { z } from 'zod';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesUpdateWithoutUserInputObjectSchema } from './BTC_AddressesUpdateWithoutUserInput.schema';
import { BTC_AddressesUncheckedUpdateWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BTC_AddressesUpdateWithoutUserInputObjectSchema),
        z.lazy(() => BTC_AddressesUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const BTC_AddressesUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
