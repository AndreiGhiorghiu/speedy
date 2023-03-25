import { z } from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum([
  'id',
  'sellerId',
  'buyerId',
  'status',
  'price',
  'old_price',
  'cc_num',
  'cvv2',
  'skip',
  'full_name',
  'first_name',
  'last_name',
  'sort_code',
  'misc',
  'exp_date',
  'exp_month',
  'exp_year',
  'zip',
  'address',
  'address2',
  'city',
  'country',
  'ip',
  'type',
  'state',
  'phone',
  'dob',
  'ssn',
  'email',
  'password',
  'mmn',
  'vbv',
  'acc_no',
  'driver_license',
  'dbVersion',
  'userId',
  'databaseId',
  'createdAt',
  'updatedAt',
]);