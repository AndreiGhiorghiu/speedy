import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    importerPresets: z.literal(true).optional(),
    theme: z.literal(true).optional(),
    canNotify: z.literal(true).optional(),
    canAlert: z.literal(true).optional(),
    alerts: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const SettingsMaxAggregateInputObjectSchema = Schema;
