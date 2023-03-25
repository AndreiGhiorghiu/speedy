import { z } from 'zod';
import { SiteWhereInputObjectSchema } from './objects/SiteWhereInput.schema';
import { SiteOrderByWithAggregationInputObjectSchema } from './objects/SiteOrderByWithAggregationInput.schema';
import { SiteScalarWhereWithAggregatesInputObjectSchema } from './objects/SiteScalarWhereWithAggregatesInput.schema';
import { SiteScalarFieldEnumSchema } from './enums/SiteScalarFieldEnum.schema';

export const SiteGroupBySchema = z.object({
  where: SiteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SiteOrderByWithAggregationInputObjectSchema,
      SiteOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SiteScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SiteScalarFieldEnumSchema),
});
