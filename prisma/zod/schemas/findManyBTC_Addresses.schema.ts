import { z } from 'zod';
import { BTC_AddressesOrderByWithRelationInputObjectSchema } from './objects/BTC_AddressesOrderByWithRelationInput.schema';
import { BTC_AddressesWhereInputObjectSchema } from './objects/BTC_AddressesWhereInput.schema';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './objects/BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesScalarFieldEnumSchema } from './enums/BTC_AddressesScalarFieldEnum.schema';

export const BTC_AddressesFindManySchema = z.object({
  orderBy: z
    .union([
      BTC_AddressesOrderByWithRelationInputObjectSchema,
      BTC_AddressesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BTC_AddressesWhereInputObjectSchema.optional(),
  cursor: BTC_AddressesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BTC_AddressesScalarFieldEnumSchema).optional(),
});
