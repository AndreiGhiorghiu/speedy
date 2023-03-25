import { z } from 'zod';
import { StatisticsCreateInputObjectSchema } from './objects/StatisticsCreateInput.schema';
import { StatisticsUncheckedCreateInputObjectSchema } from './objects/StatisticsUncheckedCreateInput.schema';

export const StatisticsCreateOneSchema = z.object({
  data: z.union([
    StatisticsCreateInputObjectSchema,
    StatisticsUncheckedCreateInputObjectSchema,
  ]),
});
