import { z } from 'zod';
import { SiteUpdateInputObjectSchema } from './objects/SiteUpdateInput.schema';
import { SiteUncheckedUpdateInputObjectSchema } from './objects/SiteUncheckedUpdateInput.schema';
import { SiteWhereUniqueInputObjectSchema } from './objects/SiteWhereUniqueInput.schema';

export const SiteUpdateOneSchema = z.object({
  data: z.union([
    SiteUpdateInputObjectSchema,
    SiteUncheckedUpdateInputObjectSchema,
  ]),
  where: SiteWhereUniqueInputObjectSchema,
});
