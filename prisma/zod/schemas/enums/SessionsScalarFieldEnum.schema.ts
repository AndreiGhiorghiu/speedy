import { z } from 'zod';

export const SessionsScalarFieldEnumSchema = z.enum([
  'id',
  'current',
  'userId',
  'expiresAt',
]);
