import { z } from 'zod';
import { SessionsOrderByWithRelationInputObjectSchema } from './objects/SessionsOrderByWithRelationInput.schema';
import { SessionsWhereInputObjectSchema } from './objects/SessionsWhereInput.schema';
import { SessionsWhereUniqueInputObjectSchema } from './objects/SessionsWhereUniqueInput.schema';
import { SessionsCountAggregateInputObjectSchema } from './objects/SessionsCountAggregateInput.schema';
import { SessionsMinAggregateInputObjectSchema } from './objects/SessionsMinAggregateInput.schema';
import { SessionsMaxAggregateInputObjectSchema } from './objects/SessionsMaxAggregateInput.schema';

export const SessionsAggregateSchema = z.object({
  orderBy: z
    .union([
      SessionsOrderByWithRelationInputObjectSchema,
      SessionsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SessionsWhereInputObjectSchema.optional(),
  cursor: SessionsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SessionsCountAggregateInputObjectSchema])
    .optional(),
  _min: SessionsMinAggregateInputObjectSchema.optional(),
  _max: SessionsMaxAggregateInputObjectSchema.optional(),
});
