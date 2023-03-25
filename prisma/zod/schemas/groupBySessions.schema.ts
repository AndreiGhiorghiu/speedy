import { z } from 'zod';
import { SessionsWhereInputObjectSchema } from './objects/SessionsWhereInput.schema';
import { SessionsOrderByWithAggregationInputObjectSchema } from './objects/SessionsOrderByWithAggregationInput.schema';
import { SessionsScalarWhereWithAggregatesInputObjectSchema } from './objects/SessionsScalarWhereWithAggregatesInput.schema';
import { SessionsScalarFieldEnumSchema } from './enums/SessionsScalarFieldEnum.schema';

export const SessionsGroupBySchema = z.object({
  where: SessionsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SessionsOrderByWithAggregationInputObjectSchema,
      SessionsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SessionsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SessionsScalarFieldEnumSchema),
});
