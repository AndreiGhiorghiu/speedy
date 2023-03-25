import { z } from 'zod';
import { TicketsUpdateManyMutationInputObjectSchema } from './objects/TicketsUpdateManyMutationInput.schema';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';

export const TicketsUpdateManySchema = z.object({
  data: TicketsUpdateManyMutationInputObjectSchema,
  where: TicketsWhereInputObjectSchema.optional(),
});
