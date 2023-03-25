import { z } from 'zod';
import { StatisticsWhereUniqueInputObjectSchema } from './objects/StatisticsWhereUniqueInput.schema';
import { StatisticsCreateInputObjectSchema } from './objects/StatisticsCreateInput.schema';
import { StatisticsUncheckedCreateInputObjectSchema } from './objects/StatisticsUncheckedCreateInput.schema';
import { StatisticsUpdateInputObjectSchema } from './objects/StatisticsUpdateInput.schema';
import { StatisticsUncheckedUpdateInputObjectSchema } from './objects/StatisticsUncheckedUpdateInput.schema';

export const StatisticsUpsertSchema = z.object({
  where: StatisticsWhereUniqueInputObjectSchema,
  create: z.union([
    StatisticsCreateInputObjectSchema,
    StatisticsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StatisticsUpdateInputObjectSchema,
    StatisticsUncheckedUpdateInputObjectSchema,
  ]),
});
