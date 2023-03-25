import { z } from 'zod';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsFindUniqueSchema = z.object({
  where: SettingsWhereUniqueInputObjectSchema,
});
