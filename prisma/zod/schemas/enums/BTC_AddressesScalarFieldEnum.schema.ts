import { z } from 'zod';

export const BTC_AddressesScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'address',
  'status',
  'received_btc',
  'received_usd',
  'currentBtcPrice',
  'createdAt',
  'updatedAt',
]);
