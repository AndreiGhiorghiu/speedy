import { z } from 'zod';
import { SiteWhereUniqueInputObjectSchema } from './objects/SiteWhereUniqueInput.schema';
import { SiteCreateInputObjectSchema } from './objects/SiteCreateInput.schema';
import { SiteUncheckedCreateInputObjectSchema } from './objects/SiteUncheckedCreateInput.schema';
import { SiteUpdateInputObjectSchema } from './objects/SiteUpdateInput.schema';
import { SiteUncheckedUpdateInputObjectSchema } from './objects/SiteUncheckedUpdateInput.schema';

export const SiteUpsertSchema = z.object({
  where: SiteWhereUniqueInputObjectSchema,
  create: z.union([
    SiteCreateInputObjectSchema,
    SiteUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SiteUpdateInputObjectSchema,
    SiteUncheckedUpdateInputObjectSchema,
  ]),
});
