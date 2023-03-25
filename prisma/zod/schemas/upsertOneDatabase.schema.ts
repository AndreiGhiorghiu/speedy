import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './objects/DatabaseWhereUniqueInput.schema';
import { DatabaseCreateInputObjectSchema } from './objects/DatabaseCreateInput.schema';
import { DatabaseUncheckedCreateInputObjectSchema } from './objects/DatabaseUncheckedCreateInput.schema';
import { DatabaseUpdateInputObjectSchema } from './objects/DatabaseUpdateInput.schema';
import { DatabaseUncheckedUpdateInputObjectSchema } from './objects/DatabaseUncheckedUpdateInput.schema';

export const DatabaseUpsertSchema = z.object({
  where: DatabaseWhereUniqueInputObjectSchema,
  create: z.union([
    DatabaseCreateInputObjectSchema,
    DatabaseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DatabaseUpdateInputObjectSchema,
    DatabaseUncheckedUpdateInputObjectSchema,
  ]),
});
