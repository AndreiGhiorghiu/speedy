import { z } from 'zod';

export const DatabaseScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'ownerId',
  'createdAt',
  'updatedAt',
  'status',
  'statisticsId',
]);
