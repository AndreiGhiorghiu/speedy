import { z } from 'zod';
import { DatabaseUpdateManyMutationInputObjectSchema } from './objects/DatabaseUpdateManyMutationInput.schema';
import { DatabaseWhereInputObjectSchema } from './objects/DatabaseWhereInput.schema';

export const DatabaseUpdateManySchema = z.object({
  data: DatabaseUpdateManyMutationInputObjectSchema,
  where: DatabaseWhereInputObjectSchema.optional(),
});
