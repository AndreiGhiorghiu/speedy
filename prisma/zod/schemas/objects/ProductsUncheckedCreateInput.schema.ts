import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    sellerId: z.string(),
    buyerId: z.string().optional().nullable(),
    status: z.string(),
    price: z.number(),
    old_price: z.number().optional().nullable(),
    cc_num: z.string(),
    cvv2: z.string(),
    skip: z.string().optional().nullable(),
    full_name: z.string().optional().nullable(),
    first_name: z.string().optional().nullable(),
    last_name: z.string().optional().nullable(),
    sort_code: z.string().optional().nullable(),
    misc: z.string().optional().nullable(),
    exp_date: z.string().optional().nullable(),
    exp_month: z.number().optional().nullable(),
    exp_year: z.number().optional().nullable(),
    zip: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    address2: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    ip: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    state: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    dob: z.string().optional().nullable(),
    ssn: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    mmn: z.string().optional().nullable(),
    vbv: z.string().optional().nullable(),
    acc_no: z.string().optional().nullable(),
    driver_license: z.string().optional().nullable(),
    dbVersion: z.number().optional(),
    userId: z.string().optional().nullable(),
    databaseId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ProductsUncheckedCreateInputObjectSchema = Schema;
