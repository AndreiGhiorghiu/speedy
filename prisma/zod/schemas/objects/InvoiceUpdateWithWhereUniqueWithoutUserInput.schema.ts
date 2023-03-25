import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutUserInputObjectSchema } from './InvoiceUpdateWithoutUserInput.schema';
import { InvoiceUncheckedUpdateWithoutUserInputObjectSchema } from './InvoiceUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InvoiceUpdateWithoutUserInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
