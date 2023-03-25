import { z } from 'zod';
import { SessionsUpdateInputObjectSchema } from './objects/SessionsUpdateInput.schema';
import { SessionsUncheckedUpdateInputObjectSchema } from './objects/SessionsUncheckedUpdateInput.schema';
import { SessionsWhereUniqueInputObjectSchema } from './objects/SessionsWhereUniqueInput.schema';

export const SessionsUpdateOneSchema = z.object({
  data: z.union([
    SessionsUpdateInputObjectSchema,
    SessionsUncheckedUpdateInputObjectSchema,
  ]),
  where: SessionsWhereUniqueInputObjectSchema,
});
