import { z } from 'zod';
import { StatisticsOrderByWithRelationInputObjectSchema } from './objects/StatisticsOrderByWithRelationInput.schema';
import { StatisticsWhereInputObjectSchema } from './objects/StatisticsWhereInput.schema';
import { StatisticsWhereUniqueInputObjectSchema } from './objects/StatisticsWhereUniqueInput.schema';
import { StatisticsCountAggregateInputObjectSchema } from './objects/StatisticsCountAggregateInput.schema';
import { StatisticsMinAggregateInputObjectSchema } from './objects/StatisticsMinAggregateInput.schema';
import { StatisticsMaxAggregateInputObjectSchema } from './objects/StatisticsMaxAggregateInput.schema';

export const StatisticsAggregateSchema = z.object({
  orderBy: z
    .union([
      StatisticsOrderByWithRelationInputObjectSchema,
      StatisticsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StatisticsWhereInputObjectSchema.optional(),
  cursor: StatisticsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StatisticsCountAggregateInputObjectSchema])
    .optional(),
  _min: StatisticsMinAggregateInputObjectSchema.optional(),
  _max: StatisticsMaxAggregateInputObjectSchema.optional(),
});
