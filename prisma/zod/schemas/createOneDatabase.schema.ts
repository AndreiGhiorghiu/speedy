import { z } from 'zod';
import { DatabaseCreateInputObjectSchema } from './objects/DatabaseCreateInput.schema';
import { DatabaseUncheckedCreateInputObjectSchema } from './objects/DatabaseUncheckedCreateInput.schema';

export const DatabaseCreateOneSchema = z.object({
  data: z.union([
    DatabaseCreateInputObjectSchema,
    DatabaseUncheckedCreateInputObjectSchema,
  ]),
});
