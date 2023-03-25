import { z } from 'zod';
import { TicketsCreateInputObjectSchema } from './objects/TicketsCreateInput.schema';
import { TicketsUncheckedCreateInputObjectSchema } from './objects/TicketsUncheckedCreateInput.schema';

export const TicketsCreateOneSchema = z.object({
  data: z.union([
    TicketsCreateInputObjectSchema,
    TicketsUncheckedCreateInputObjectSchema,
  ]),
});
