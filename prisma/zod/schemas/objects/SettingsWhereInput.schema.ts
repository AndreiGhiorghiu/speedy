import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SettingsWhereInputObjectSchema),
        z.lazy(() => SettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SettingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SettingsWhereInputObjectSchema),
        z.lazy(() => SettingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    importerPresets: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    theme: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    canNotify: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    canAlert: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    alerts: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const SettingsWhereInputObjectSchema = Schema;
