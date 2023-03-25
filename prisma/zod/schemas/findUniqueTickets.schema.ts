import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';

export const TicketsFindUniqueSchema = z.object({
  where: TicketsWhereUniqueInputObjectSchema,
});
