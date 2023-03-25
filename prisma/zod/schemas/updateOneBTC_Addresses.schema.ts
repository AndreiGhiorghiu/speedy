import { z } from 'zod';
import { BTC_AddressesUpdateInputObjectSchema } from './objects/BTC_AddressesUpdateInput.schema';
import { BTC_AddressesUncheckedUpdateInputObjectSchema } from './objects/BTC_AddressesUncheckedUpdateInput.schema';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './objects/BTC_AddressesWhereUniqueInput.schema';

export const BTC_AddressesUpdateOneSchema = z.object({
  data: z.union([
    BTC_AddressesUpdateInputObjectSchema,
    BTC_AddressesUncheckedUpdateInputObjectSchema,
  ]),
  where: BTC_AddressesWhereUniqueInputObjectSchema,
});
