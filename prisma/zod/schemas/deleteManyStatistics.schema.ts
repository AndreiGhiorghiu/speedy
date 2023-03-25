import { z } from 'zod';
import { StatisticsWhereInputObjectSchema } from './objects/StatisticsWhereInput.schema';

export const StatisticsDeleteManySchema = z.object({
  where: StatisticsWhereInputObjectSchema.optional(),
});
