import { z } from 'zod';
import { StatisticsWhereUniqueInputObjectSchema } from './objects/StatisticsWhereUniqueInput.schema';

export const StatisticsFindUniqueSchema = z.object({
  where: StatisticsWhereUniqueInputObjectSchema,
});
