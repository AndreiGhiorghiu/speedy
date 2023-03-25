import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { DatabaseOrderByWithRelationInputObjectSchema } from './DatabaseOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    seller: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    sellerId: z.lazy(() => SortOrderSchema).optional(),
    buyer: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    buyerId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    old_price: z.lazy(() => SortOrderSchema).optional(),
    cc_num: z.lazy(() => SortOrderSchema).optional(),
    cvv2: z.lazy(() => SortOrderSchema).optional(),
    skip: z.lazy(() => SortOrderSchema).optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    first_name: z.lazy(() => SortOrderSchema).optional(),
    last_name: z.lazy(() => SortOrderSchema).optional(),
    sort_code: z.lazy(() => SortOrderSchema).optional(),
    misc: z.lazy(() => SortOrderSchema).optional(),
    exp_date: z.lazy(() => SortOrderSchema).optional(),
    exp_month: z.lazy(() => SortOrderSchema).optional(),
    exp_year: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    address2: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    ip: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    dob: z.lazy(() => SortOrderSchema).optional(),
    ssn: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    mmn: z.lazy(() => SortOrderSchema).optional(),
    vbv: z.lazy(() => SortOrderSchema).optional(),
    acc_no: z.lazy(() => SortOrderSchema).optional(),
    driver_license: z.lazy(() => SortOrderSchema).optional(),
    dbVersion: z.lazy(() => SortOrderSchema).optional(),
    User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    database: z
      .lazy(() => DatabaseOrderByWithRelationInputObjectSchema)
      .optional(),
    databaseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductsOrderByWithRelationInputObjectSchema = Schema;
