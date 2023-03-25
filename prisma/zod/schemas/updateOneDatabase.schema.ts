import { z } from 'zod';
import { DatabaseUpdateInputObjectSchema } from './objects/DatabaseUpdateInput.schema';
import { DatabaseUncheckedUpdateInputObjectSchema } from './objects/DatabaseUncheckedUpdateInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './objects/DatabaseWhereUniqueInput.schema';

export const DatabaseUpdateOneSchema = z.object({
  data: z.union([
    DatabaseUpdateInputObjectSchema,
    DatabaseUncheckedUpdateInputObjectSchema,
  ]),
  where: DatabaseWhereUniqueInputObjectSchema,
});
