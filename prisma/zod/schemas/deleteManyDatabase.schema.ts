import { z } from 'zod';
import { DatabaseWhereInputObjectSchema } from './objects/DatabaseWhereInput.schema';

export const DatabaseDeleteManySchema = z.object({
  where: DatabaseWhereInputObjectSchema.optional(),
});
