import { z } from 'zod';
import { BTC_AddressesUpdateManyMutationInputObjectSchema } from './objects/BTC_AddressesUpdateManyMutationInput.schema';
import { BTC_AddressesWhereInputObjectSchema } from './objects/BTC_AddressesWhereInput.schema';

export const BTC_AddressesUpdateManySchema = z.object({
  data: BTC_AddressesUpdateManyMutationInputObjectSchema,
  where: BTC_AddressesWhereInputObjectSchema.optional(),
});
