import { z } from 'zod';

export const StatisticsScalarFieldEnumSchema = z.enum([
  'id',
  'databaseId',
  'data',
]);
