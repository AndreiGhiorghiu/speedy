import { z } from 'zod';
import { UserCreateNestedOneWithoutInvoicesInputObjectSchema } from './UserCreateNestedOneWithoutInvoicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateInput> = z
  .object({
    id: z.string().optional(),
    code: z.string(),
    total: z.number(),
    status: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutInvoicesInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const InvoiceCreateInputObjectSchema = Schema;
