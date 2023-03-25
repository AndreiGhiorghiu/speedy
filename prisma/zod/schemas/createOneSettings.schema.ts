import { z } from 'zod';
import { SettingsCreateInputObjectSchema } from './objects/SettingsCreateInput.schema';
import { SettingsUncheckedCreateInputObjectSchema } from './objects/SettingsUncheckedCreateInput.schema';

export const SettingsCreateOneSchema = z.object({
  data: z.union([
    SettingsCreateInputObjectSchema,
    SettingsUncheckedCreateInputObjectSchema,
  ]),
});
