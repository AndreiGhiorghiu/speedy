import { z } from 'zod';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesCreateWithoutUserInputObjectSchema } from './BTC_AddressesCreateWithoutUserInput.schema';
import { BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BTC_AddressesCreateWithoutUserInputObjectSchema),
      z.lazy(() => BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema = Schema;
