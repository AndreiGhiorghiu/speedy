import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum([
  'id',
  'code',
  'total',
  'status',
  'userId',
  'createdAt',
  'updatedAt',
]);
