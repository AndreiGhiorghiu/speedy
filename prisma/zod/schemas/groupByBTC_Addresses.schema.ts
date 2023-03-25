import { z } from 'zod';
import { BTC_AddressesWhereInputObjectSchema } from './objects/BTC_AddressesWhereInput.schema';
import { BTC_AddressesOrderByWithAggregationInputObjectSchema } from './objects/BTC_AddressesOrderByWithAggregationInput.schema';
import { BTC_AddressesScalarWhereWithAggregatesInputObjectSchema } from './objects/BTC_AddressesScalarWhereWithAggregatesInput.schema';
import { BTC_AddressesScalarFieldEnumSchema } from './enums/BTC_AddressesScalarFieldEnum.schema';

export const BTC_AddressesGroupBySchema = z.object({
  where: BTC_AddressesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BTC_AddressesOrderByWithAggregationInputObjectSchema,
      BTC_AddressesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BTC_AddressesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BTC_AddressesScalarFieldEnumSchema),
});
