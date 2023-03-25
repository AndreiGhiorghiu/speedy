import { z } from 'zod';
import { SiteWhereUniqueInputObjectSchema } from './objects/SiteWhereUniqueInput.schema';

export const SiteFindUniqueSchema = z.object({
  where: SiteWhereUniqueInputObjectSchema,
});
