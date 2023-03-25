import { z } from 'zod';
import { SiteWhereInputObjectSchema } from './objects/SiteWhereInput.schema';

export const SiteDeleteManySchema = z.object({
  where: SiteWhereInputObjectSchema.optional(),
});
