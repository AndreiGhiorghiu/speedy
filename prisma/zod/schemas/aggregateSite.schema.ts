import { z } from 'zod';
import { SiteOrderByWithRelationInputObjectSchema } from './objects/SiteOrderByWithRelationInput.schema';
import { SiteWhereInputObjectSchema } from './objects/SiteWhereInput.schema';
import { SiteWhereUniqueInputObjectSchema } from './objects/SiteWhereUniqueInput.schema';
import { SiteCountAggregateInputObjectSchema } from './objects/SiteCountAggregateInput.schema';
import { SiteMinAggregateInputObjectSchema } from './objects/SiteMinAggregateInput.schema';
import { SiteMaxAggregateInputObjectSchema } from './objects/SiteMaxAggregateInput.schema';
import { SiteAvgAggregateInputObjectSchema } from './objects/SiteAvgAggregateInput.schema';
import { SiteSumAggregateInputObjectSchema } from './objects/SiteSumAggregateInput.schema';

export const SiteAggregateSchema = z.object({
  orderBy: z
    .union([
      SiteOrderByWithRelationInputObjectSchema,
      SiteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SiteWhereInputObjectSchema.optional(),
  cursor: SiteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SiteCountAggregateInputObjectSchema])
    .optional(),
  _min: SiteMinAggregateInputObjectSchema.optional(),
  _max: SiteMaxAggregateInputObjectSchema.optional(),
  _avg: SiteAvgAggregateInputObjectSchema.optional(),
  _sum: SiteSumAggregateInputObjectSchema.optional(),
});
