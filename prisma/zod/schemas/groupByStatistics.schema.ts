import { z } from 'zod';
import { StatisticsWhereInputObjectSchema } from './objects/StatisticsWhereInput.schema';
import { StatisticsOrderByWithAggregationInputObjectSchema } from './objects/StatisticsOrderByWithAggregationInput.schema';
import { StatisticsScalarWhereWithAggregatesInputObjectSchema } from './objects/StatisticsScalarWhereWithAggregatesInput.schema';
import { StatisticsScalarFieldEnumSchema } from './enums/StatisticsScalarFieldEnum.schema';

export const StatisticsGroupBySchema = z.object({
  where: StatisticsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StatisticsOrderByWithAggregationInputObjectSchema,
      StatisticsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: StatisticsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StatisticsScalarFieldEnumSchema),
});
