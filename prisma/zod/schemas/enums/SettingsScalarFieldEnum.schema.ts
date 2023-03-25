import { z } from 'zod';

export const SettingsScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'importerPresets',
  'theme',
  'canNotify',
  'canAlert',
  'alerts',
  'createdAt',
  'updatedAt',
]);
