import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    importerPresets: z.string().optional(),
    theme: z.string().optional(),
    canNotify: z.boolean().optional(),
    canAlert: z.boolean().optional(),
    alerts: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const SettingsCreateWithoutUserInputObjectSchema = Schema;
