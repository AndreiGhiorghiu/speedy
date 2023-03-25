import { z } from 'zod';
import { BTC_AddressesOrderByWithRelationInputObjectSchema } from './objects/BTC_AddressesOrderByWithRelationInput.schema';
import { BTC_AddressesWhereInputObjectSchema } from './objects/BTC_AddressesWhereInput.schema';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './objects/BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesCountAggregateInputObjectSchema } from './objects/BTC_AddressesCountAggregateInput.schema';
import { BTC_AddressesMinAggregateInputObjectSchema } from './objects/BTC_AddressesMinAggregateInput.schema';
import { BTC_AddressesMaxAggregateInputObjectSchema } from './objects/BTC_AddressesMaxAggregateInput.schema';
import { BTC_AddressesAvgAggregateInputObjectSchema } from './objects/BTC_AddressesAvgAggregateInput.schema';
import { BTC_AddressesSumAggregateInputObjectSchema } from './objects/BTC_AddressesSumAggregateInput.schema';

export const BTC_AddressesAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), BTC_AddressesCountAggregateInputObjectSchema])
    .optional(),
  _min: BTC_AddressesMinAggregateInputObjectSchema.optional(),
  _max: BTC_AddressesMaxAggregateInputObjectSchema.optional(),
  _avg: BTC_AddressesAvgAggregateInputObjectSchema.optional(),
  _sum: BTC_AddressesSumAggregateInputObjectSchema.optional(),
});
