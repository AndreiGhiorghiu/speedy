import { z } from 'zod';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithoutUserInputObjectSchema } from './InvoiceUpdateWithoutUserInput.schema';
import { InvoiceUncheckedUpdateWithoutUserInputObjectSchema } from './InvoiceUncheckedUpdateWithoutUserInput.schema';
import { InvoiceCreateWithoutUserInputObjectSchema } from './InvoiceCreateWithoutUserInput.schema';
import { InvoiceUncheckedCreateWithoutUserInputObjectSchema } from './InvoiceUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutUserInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutUserInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const InvoiceUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
