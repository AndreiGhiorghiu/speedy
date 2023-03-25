import { z } from 'zod';
import { SettingsOrderByWithRelationInputObjectSchema } from './objects/SettingsOrderByWithRelationInput.schema';
import { SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';
import { SettingsScalarFieldEnumSchema } from './enums/SettingsScalarFieldEnum.schema';

export const SettingsFindFirstSchema = z.object({
  orderBy: z
    .union([
      SettingsOrderByWithRelationInputObjectSchema,
      SettingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SettingsWhereInputObjectSchema.optional(),
  cursor: SettingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SettingsScalarFieldEnumSchema).optional(),
});
