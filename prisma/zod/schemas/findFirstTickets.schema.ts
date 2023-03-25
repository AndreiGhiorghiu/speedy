import { z } from 'zod';
import { TicketsOrderByWithRelationInputObjectSchema } from './objects/TicketsOrderByWithRelationInput.schema';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';
import { TicketsScalarFieldEnumSchema } from './enums/TicketsScalarFieldEnum.schema';

export const TicketsFindFirstSchema = z.object({
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
  distinct: z.array(TicketsScalarFieldEnumSchema).optional(),
});
