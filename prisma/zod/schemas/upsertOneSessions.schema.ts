import { z } from 'zod';
import { SessionsWhereUniqueInputObjectSchema } from './objects/SessionsWhereUniqueInput.schema';
import { SessionsCreateInputObjectSchema } from './objects/SessionsCreateInput.schema';
import { SessionsUncheckedCreateInputObjectSchema } from './objects/SessionsUncheckedCreateInput.schema';
import { SessionsUpdateInputObjectSchema } from './objects/SessionsUpdateInput.schema';
import { SessionsUncheckedUpdateInputObjectSchema } from './objects/SessionsUncheckedUpdateInput.schema';

export const SessionsUpsertSchema = z.object({
  where: SessionsWhereUniqueInputObjectSchema,
  create: z.union([
    SessionsCreateInputObjectSchema,
    SessionsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SessionsUpdateInputObjectSchema,
    SessionsUncheckedUpdateInputObjectSchema,
  ]),
});
