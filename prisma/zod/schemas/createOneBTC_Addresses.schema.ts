import { z } from 'zod';
import { BTC_AddressesCreateInputObjectSchema } from './objects/BTC_AddressesCreateInput.schema';
import { BTC_AddressesUncheckedCreateInputObjectSchema } from './objects/BTC_AddressesUncheckedCreateInput.schema';

export const BTC_AddressesCreateOneSchema = z.object({
  data: z.union([
    BTC_AddressesCreateInputObjectSchema,
    BTC_AddressesUncheckedCreateInputObjectSchema,
  ]),
});
