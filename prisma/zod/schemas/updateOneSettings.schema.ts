import { z } from 'zod';
import { SettingsUpdateInputObjectSchema } from './objects/SettingsUpdateInput.schema';
import { SettingsUncheckedUpdateInputObjectSchema } from './objects/SettingsUncheckedUpdateInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsUpdateOneSchema = z.object({
  data: z.union([
    SettingsUpdateInputObjectSchema,
    SettingsUncheckedUpdateInputObjectSchema,
  ]),
  where: SettingsWhereUniqueInputObjectSchema,
});
