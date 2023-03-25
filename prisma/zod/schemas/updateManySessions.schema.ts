import { z } from 'zod';
import { SessionsUpdateManyMutationInputObjectSchema } from './objects/SessionsUpdateManyMutationInput.schema';
import { SessionsWhereInputObjectSchema } from './objects/SessionsWhereInput.schema';

export const SessionsUpdateManySchema = z.object({
  data: SessionsUpdateManyMutationInputObjectSchema,
  where: SessionsWhereInputObjectSchema.optional(),
});
