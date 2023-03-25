import { z } from 'zod';
import { StatisticsWhereUniqueInputObjectSchema } from './objects/StatisticsWhereUniqueInput.schema';

export const StatisticsDeleteOneSchema = z.object({
  where: StatisticsWhereUniqueInputObjectSchema,
});
