import { z } from 'zod';
import { StatisticsOrderByWithRelationInputObjectSchema } from './objects/StatisticsOrderByWithRelationInput.schema';
import { StatisticsWhereInputObjectSchema } from './objects/StatisticsWhereInput.schema';
import { StatisticsWhereUniqueInputObjectSchema } from './objects/StatisticsWhereUniqueInput.schema';
import { StatisticsScalarFieldEnumSchema } from './enums/StatisticsScalarFieldEnum.schema';

export const StatisticsFindFirstSchema = z.object({
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
  distinct: z.array(StatisticsScalarFieldEnumSchema).optional(),
});
