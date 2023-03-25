import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sellerId: z.literal(true).optional(),
    buyerId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    price: z.literal(true).optional(),
    old_price: z.literal(true).optional(),
    cc_num: z.literal(true).optional(),
    cvv2: z.literal(true).optional(),
    skip: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    first_name: z.literal(true).optional(),
    last_name: z.literal(true).optional(),
    sort_code: z.literal(true).optional(),
    misc: z.literal(true).optional(),
    exp_date: z.literal(true).optional(),
    exp_month: z.literal(true).optional(),
    exp_year: z.literal(true).optional(),
    zip: z.literal(true).optional(),
    address: z.literal(true).optional(),
    address2: z.literal(true).optional(),
    city: z.literal(true).optional(),
    country: z.literal(true).optional(),
    ip: z.literal(true).optional(),
    type: z.literal(true).optional(),
    state: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    dob: z.literal(true).optional(),
    ssn: z.literal(true).optional(),
    email: z.literal(true).optional(),
    password: z.literal(true).optional(),
    mmn: z.literal(true).optional(),
    vbv: z.literal(true).optional(),
    acc_no: z.literal(true).optional(),
    driver_license: z.literal(true).optional(),
    dbVersion: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    databaseId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ProductsCountAggregateInputObjectSchema = Schema;
