import { z } from 'zod';
import { InvoiceCreateWithoutUserInputObjectSchema } from './InvoiceCreateWithoutUserInput.schema';
import { InvoiceUncheckedCreateWithoutUserInputObjectSchema } from './InvoiceUncheckedCreateWithoutUserInput.schema';
import { InvoiceCreateOrConnectWithoutUserInputObjectSchema } from './InvoiceCreateOrConnectWithoutUserInput.schema';
import { InvoiceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutUserInput.schema';
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema';
import { InvoiceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutUserInput.schema';
import { InvoiceUpdateManyWithWhereWithoutUserInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutUserInput.schema';
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => InvoiceUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => InvoiceUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InvoiceUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => InvoiceUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => InvoiceScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const InvoiceUpdateManyWithoutUserNestedInputObjectSchema = Schema;
