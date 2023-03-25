import { z } from 'zod';
import { InvoiceCreateWithoutUserInputObjectSchema } from './InvoiceCreateWithoutUserInput.schema';
import { InvoiceUncheckedCreateWithoutUserInputObjectSchema } from './InvoiceUncheckedCreateWithoutUserInput.schema';
import { InvoiceCreateOrConnectWithoutUserInputObjectSchema } from './InvoiceCreateOrConnectWithoutUserInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutUserInputObjectSchema),
          z.lazy(() => InvoiceCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
