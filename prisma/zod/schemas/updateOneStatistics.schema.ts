import { z } from 'zod';
import { StatisticsUpdateInputObjectSchema } from './objects/StatisticsUpdateInput.schema';
import { StatisticsUncheckedUpdateInputObjectSchema } from './objects/StatisticsUncheckedUpdateInput.schema';
import { StatisticsWhereUniqueInputObjectSchema } from './objects/StatisticsWhereUniqueInput.schema';

export const StatisticsUpdateOneSchema = z.object({
  data: z.union([
    StatisticsUpdateInputObjectSchema,
    StatisticsUncheckedUpdateInputObjectSchema,
  ]),
  where: StatisticsWhereUniqueInputObjectSchema,
});
