import { z } from 'zod';
import { TicketsWhereUniqueInputObjectSchema } from './objects/TicketsWhereUniqueInput.schema';
import { TicketsCreateInputObjectSchema } from './objects/TicketsCreateInput.schema';
import { TicketsUncheckedCreateInputObjectSchema } from './objects/TicketsUncheckedCreateInput.schema';
import { TicketsUpdateInputObjectSchema } from './objects/TicketsUpdateInput.schema';
import { TicketsUncheckedUpdateInputObjectSchema } from './objects/TicketsUncheckedUpdateInput.schema';

export const TicketsUpsertSchema = z.object({
  where: TicketsWhereUniqueInputObjectSchema,
  create: z.union([
    TicketsCreateInputObjectSchema,
    TicketsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TicketsUpdateInputObjectSchema,
    TicketsUncheckedUpdateInputObjectSchema,
  ]),
});
