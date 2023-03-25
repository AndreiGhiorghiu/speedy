import { z } from 'zod';
import { SiteUpdateManyMutationInputObjectSchema } from './objects/SiteUpdateManyMutationInput.schema';
import { SiteWhereInputObjectSchema } from './objects/SiteWhereInput.schema';

export const SiteUpdateManySchema = z.object({
  data: SiteUpdateManyMutationInputObjectSchema,
  where: SiteWhereInputObjectSchema.optional(),
});
