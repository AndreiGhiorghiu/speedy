import { z } from 'zod';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './objects/BTC_AddressesWhereUniqueInput.schema';

export const BTC_AddressesDeleteOneSchema = z.object({
  where: BTC_AddressesWhereUniqueInputObjectSchema,
});
