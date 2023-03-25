import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceCreateWithoutUserInputObjectSchema } from './InvoiceCreateWithoutUserInput.schema';
import { InvoiceUncheckedCreateWithoutUserInputObjectSchema } from './InvoiceUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutUserInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceCreateOrConnectWithoutUserInputObjectSchema = Schema;
