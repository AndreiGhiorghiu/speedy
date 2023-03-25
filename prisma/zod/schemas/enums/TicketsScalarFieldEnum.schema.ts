import { z } from 'zod';

export const TicketsScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'category',
  'message',
  'status',
  'reporterId',
  'ticketsId',
  'createdAt',
  'updatedAt',
]);
