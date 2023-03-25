import { z } from 'zod';
import { SiteOrderByWithRelationInputObjectSchema } from './objects/SiteOrderByWithRelationInput.schema';
import { SiteWhereInputObjectSchema } from './objects/SiteWhereInput.schema';
import { SiteWhereUniqueInputObjectSchema } from './objects/SiteWhereUniqueInput.schema';
import { SiteScalarFieldEnumSchema } from './enums/SiteScalarFieldEnum.schema';

export const SiteFindManySchema = z.object({
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
  distinct: z.array(SiteScalarFieldEnumSchema).optional(),
});
