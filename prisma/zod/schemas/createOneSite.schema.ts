import { z } from 'zod';
import { SiteCreateInputObjectSchema } from './objects/SiteCreateInput.schema';
import { SiteUncheckedCreateInputObjectSchema } from './objects/SiteUncheckedCreateInput.schema';

export const SiteCreateOneSchema = z.object({
  data: z.union([
    SiteCreateInputObjectSchema,
    SiteUncheckedCreateInputObjectSchema,
  ]),
});
