import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'username',
  'role',
  'password',
  'ballance',
  'secure',
  'status',
  'fee',
  'referenceId',
  'createdAt',
  'updatedAt',
]);
