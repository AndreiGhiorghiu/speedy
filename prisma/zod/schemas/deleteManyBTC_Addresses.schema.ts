import { z } from 'zod';
import { BTC_AddressesWhereInputObjectSchema } from './objects/BTC_AddressesWhereInput.schema';

export const BTC_AddressesDeleteManySchema = z.object({
  where: BTC_AddressesWhereInputObjectSchema.optional(),
});
