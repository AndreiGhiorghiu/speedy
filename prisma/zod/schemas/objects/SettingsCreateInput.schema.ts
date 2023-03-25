import { z } from 'zod';
import { UserCreateNestedOneWithoutSettingsInputObjectSchema } from './UserCreateNestedOneWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSettingsInputObjectSchema),
    importerPresets: z.string().optional(),
    theme: z.string().optional(),
    canNotify: z.boolean().optional(),
    canAlert: z.boolean().optional(),
    alerts: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const SettingsCreateInputObjectSchema = Schema;
