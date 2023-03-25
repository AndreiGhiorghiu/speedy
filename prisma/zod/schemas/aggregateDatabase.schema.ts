import { z } from 'zod';
import { DatabaseOrderByWithRelationInputObjectSchema } from './objects/DatabaseOrderByWithRelationInput.schema';
import { DatabaseWhereInputObjectSchema } from './objects/DatabaseWhereInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './objects/DatabaseWhereUniqueInput.schema';
import { DatabaseCountAggregateInputObjectSchema } from './objects/DatabaseCountAggregateInput.schema';
import { DatabaseMinAggregateInputObjectSchema } from './objects/DatabaseMinAggregateInput.schema';
import { DatabaseMaxAggregateInputObjectSchema } from './objects/DatabaseMaxAggregateInput.schema';

export const DatabaseAggregateSchema = z.object({
  orderBy: z
    .union([
      DatabaseOrderByWithRelationInputObjectSchema,
      DatabaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DatabaseWhereInputObjectSchema.optional(),
  cursor: DatabaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DatabaseCountAggregateInputObjectSchema])
    .optional(),
  _min: DatabaseMinAggregateInputObjectSchema.optional(),
  _max: DatabaseMaxAggregateInputObjectSchema.optional(),
});
