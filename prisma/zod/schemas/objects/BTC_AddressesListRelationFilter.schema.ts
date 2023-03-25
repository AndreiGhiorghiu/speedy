import { z } from 'zod';
import { BTC_AddressesWhereInputObjectSchema } from './BTC_AddressesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesListRelationFilter> = z
  .object({
    every: z.lazy(() => BTC_AddressesWhereInputObjectSchema).optional(),
    some: z.lazy(() => BTC_AddressesWhereInputObjectSchema).optional(),
    none: z.lazy(() => BTC_AddressesWhereInputObjectSchema).optional(),
  })
  .strict();

export const BTC_AddressesListRelationFilterObjectSchema = Schema;
