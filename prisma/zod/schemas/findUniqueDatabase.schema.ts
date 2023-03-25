import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './objects/DatabaseWhereUniqueInput.schema';

export const DatabaseFindUniqueSchema = z.object({
  where: DatabaseWhereUniqueInputObjectSchema,
});
