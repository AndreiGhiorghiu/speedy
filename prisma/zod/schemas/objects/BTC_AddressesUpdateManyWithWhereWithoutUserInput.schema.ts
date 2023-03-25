import { z } from 'zod';
import { BTC_AddressesScalarWhereInputObjectSchema } from './BTC_AddressesScalarWhereInput.schema';
import { BTC_AddressesUpdateManyMutationInputObjectSchema } from './BTC_AddressesUpdateManyMutationInput.schema';
import { BTC_AddressesUncheckedUpdateManyWithoutBtc_addressesInputObjectSchema } from './BTC_AddressesUncheckedUpdateManyWithoutBtc_addressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => BTC_AddressesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BTC_AddressesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BTC_AddressesUncheckedUpdateManyWithoutBtc_addressesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BTC_AddressesUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
