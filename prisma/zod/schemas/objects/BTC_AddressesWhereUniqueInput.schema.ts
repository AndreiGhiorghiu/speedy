import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const BTC_AddressesWhereUniqueInputObjectSchema = Schema;
