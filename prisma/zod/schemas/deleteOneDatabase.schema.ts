import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './objects/DatabaseWhereUniqueInput.schema';

export const DatabaseDeleteOneSchema = z.object({
  where: DatabaseWhereUniqueInputObjectSchema,
});
