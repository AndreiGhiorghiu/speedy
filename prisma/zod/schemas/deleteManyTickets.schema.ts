import { z } from 'zod';
import { TicketsWhereInputObjectSchema } from './objects/TicketsWhereInput.schema';

export const TicketsDeleteManySchema = z.object({
  where: TicketsWhereInputObjectSchema.optional(),
});
