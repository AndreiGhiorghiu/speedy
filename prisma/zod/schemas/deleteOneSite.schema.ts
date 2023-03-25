import { z } from 'zod';
import { SiteWhereUniqueInputObjectSchema } from './objects/SiteWhereUniqueInput.schema';

export const SiteDeleteOneSchema = z.object({
  where: SiteWhereUniqueInputObjectSchema,
});
