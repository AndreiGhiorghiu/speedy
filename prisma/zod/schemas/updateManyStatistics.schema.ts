import { z } from 'zod';
import { StatisticsUpdateManyMutationInputObjectSchema } from './objects/StatisticsUpdateManyMutationInput.schema';
import { StatisticsWhereInputObjectSchema } from './objects/StatisticsWhereInput.schema';

export const StatisticsUpdateManySchema = z.object({
  data: StatisticsUpdateManyMutationInputObjectSchema,
  where: StatisticsWhereInputObjectSchema.optional(),
});
