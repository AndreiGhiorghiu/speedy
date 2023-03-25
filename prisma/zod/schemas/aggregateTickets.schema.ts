import { z } from 'zod';
import { TicketsOrderByWithRelationInputObjectSchema } from './objects/TicketsOrderByWithRelationInput.schema';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';
import { TicketsCountAggregateInputObjectSchema } from './objects/TicketsCountAggregateInput.schema';
import { TicketsMinAggregateInputObjectSchema } from './objects/TicketsMinAggregateInput.schema';
import { TicketsMaxAggregateInputObjectSchema } from './objects/TicketsMaxAggregateInput.schema';

export const TicketsAggregateSchema = z.object({
  orderBy: z
    .union([
      TicketsOrderByWithRelationInputObjectSchema,
      TicketsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TicketsWhereInputObjectSchema.optional(),
  cursor: TicketsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TicketsCountAggregateInputObjectSchema])
    .optional(),
  _min: TicketsMinAggregateInputObjectSchema.optional(),
  _max: TicketsMaxAggregateInputObjectSchema.optional(),
});
