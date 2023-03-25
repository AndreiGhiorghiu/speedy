import { z } from 'zod';
import { UserCreateNestedOneWithoutBtc_addressesInputObjectSchema } from './UserCreateNestedOneWithoutBtc_addressesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutBtc_addressesInputObjectSchema,
    ),
    address: z.string(),
    status: z.string().optional(),
    received_btc: z.number().optional(),
    received_usd: z.number().optional(),
    currentBtcPrice: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const BTC_AddressesCreateInputObjectSchema = Schema;
