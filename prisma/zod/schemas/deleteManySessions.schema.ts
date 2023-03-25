import { z } from 'zod';
import { SessionsWhereInputObjectSchema } from './objects/SessionsWhereInput.schema';

export const SessionsDeleteManySchema = z.object({
  where: SessionsWhereInputObjectSchema.optional(),
});
