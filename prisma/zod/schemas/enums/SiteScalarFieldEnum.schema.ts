import { z } from 'zod';

export const SiteScalarFieldEnumSchema = z.enum([
  'id',
  'ballance',
  'data',
  'createdAt',
  'updatedAt',
]);
