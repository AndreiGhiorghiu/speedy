import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';

export const TicketsDeleteOneSchema = z.object({
  where: TicketsWhereUniqueInputObjectSchema,
});
