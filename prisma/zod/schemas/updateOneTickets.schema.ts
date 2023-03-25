import { z } from 'zod';
import { TicketsUpdateInputObjectSchema } from './objects/TicketsUpdateInput.schema';
import { TicketsUncheckedUpdateInputObjectSchema } from './objects/TicketsUncheckedUpdateInput.schema';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';

export const TicketsUpdateOneSchema = z.object({
  data: z.union([
    TicketsUpdateInputObjectSchema,
    TicketsUncheckedUpdateInputObjectSchema,
  ]),
  where: TicketsWhereUniqueInputObjectSchema,
});
