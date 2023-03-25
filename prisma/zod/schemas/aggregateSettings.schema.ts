import { z } from 'zod';
import { SettingsOrderByWithRelationInputObjectSchema } from './objects/SettingsOrderByWithRelationInput.schema';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';
import { SettingsCountAggregateInputObjectSchema } from './objects/SettingsCountAggregateInput.schema';
import { SettingsMinAggregateInputObjectSchema } from './objects/SettingsMinAggregateInput.schema';
import { SettingsMaxAggregateInputObjectSchema } from './objects/SettingsMaxAggregateInput.schema';

export const SettingsAggregateSchema = z.object({
  orderBy: z
    .union([
      SettingsOrderByWithRelationInputObjectSchema,
      SettingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SettingsWhereInputObjectSchema.optional(),
  cursor: SettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SettingsCountAggregateInputObjectSchema])
    .optional(),
  _min: SettingsMinAggregateInputObjectSchema.optional(),
  _max: SettingsMaxAggregateInputObjectSchema.optional(),
});
