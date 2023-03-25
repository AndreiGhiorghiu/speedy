import { z } from 'zod';
import { DatabaseWhereInputObjectSchema } from './objects/DatabaseWhereInput.schema';
import { DatabaseOrderByWithAggregationInputObjectSchema } from './objects/DatabaseOrderByWithAggregationInput.schema';
import { DatabaseScalarWhereWithAggregatesInputObjectSchema } from './objects/DatabaseScalarWhereWithAggregatesInput.schema';
import { DatabaseScalarFieldEnumSchema } from './enums/DatabaseScalarFieldEnum.schema';

export const DatabaseGroupBySchema = z.object({
  where: DatabaseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DatabaseOrderByWithAggregationInputObjectSchema,
      DatabaseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DatabaseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DatabaseScalarFieldEnumSchema),
});
