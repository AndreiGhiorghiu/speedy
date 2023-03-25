import { z } from 'zod';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './objects/BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesCreateInputObjectSchema } from './objects/BTC_AddressesCreateInput.schema';
import { BTC_AddressesUncheckedCreateInputObjectSchema } from './objects/BTC_AddressesUncheckedCreateInput.schema';
import { BTC_AddressesUpdateInputObjectSchema } from './objects/BTC_AddressesUpdateInput.schema';
import { BTC_AddressesUncheckedUpdateInputObjectSchema } from './objects/BTC_AddressesUncheckedUpdateInput.schema';

export const BTC_AddressesUpsertSchema = z.object({
  where: BTC_AddressesWhereUniqueInputObjectSchema,
  create: z.union([
    BTC_AddressesCreateInputObjectSchema,
    BTC_AddressesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BTC_AddressesUpdateInputObjectSchema,
    BTC_AddressesUncheckedUpdateInputObjectSchema,
  ]),
});
