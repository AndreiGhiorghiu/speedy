import { z } from 'zod';
import { SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsDeleteOneSchema = z.object({
  where: SettingsWhereUniqueInputObjectSchema,
});
