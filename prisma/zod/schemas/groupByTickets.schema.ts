import { z } from 'zod';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';
import { TicketsOrderByWithAggregationInputObjectSchema } from './objects/TicketsOrderByWithAggregationInput.schema';
import { TicketsScalarWhereWithAggregatesInputObjectSchema } from './objects/TicketsScalarWhereWithAggregatesInput.schema';
import { TicketsScalarFieldEnumSchema } from './enums/TicketsScalarFieldEnum.schema';

export const TicketsGroupBySchema = z.object({
  where: TicketsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TicketsOrderByWithAggregationInputObjectSchema,
      TicketsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TicketsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TicketsScalarFieldEnumSchema),
});
