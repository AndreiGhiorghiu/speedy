import { z } from 'zod';
import { BTC_AddressesCreateWithoutUserInputObjectSchema } from './BTC_AddressesCreateWithoutUserInput.schema';
import { BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema } from './BTC_AddressesUncheckedCreateWithoutUserInput.schema';
import { BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema } from './BTC_AddressesCreateOrConnectWithoutUserInput.schema';
import { BTC_AddressesUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './BTC_AddressesUpsertWithWhereUniqueWithoutUserInput.schema';
import { BTC_AddressesWhereUniqueInputObjectSchema } from './BTC_AddressesWhereUniqueInput.schema';
import { BTC_AddressesUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './BTC_AddressesUpdateWithWhereUniqueWithoutUserInput.schema';
import { BTC_AddressesUpdateManyWithWhereWithoutUserInputObjectSchema } from './BTC_AddressesUpdateManyWithWhereWithoutUserInput.schema';
import { BTC_AddressesScalarWhereInputObjectSchema } from './BTC_AddressesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BTC_AddressesUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BTC_AddressesCreateWithoutUserInputObjectSchema),
          z.lazy(() => BTC_AddressesCreateWithoutUserInputObjectSchema).array(),
          z.lazy(
            () => BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => BTC_AddressesUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => BTC_AddressesCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BTC_AddressesUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BTC_AddressesUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema),
          z.lazy(() => BTC_AddressesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BTC_AddressesUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BTC_AddressesUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BTC_AddressesUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BTC_AddressesUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BTC_AddressesScalarWhereInputObjectSchema),
          z.lazy(() => BTC_AddressesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BTC_AddressesUpdateManyWithoutUserNestedInputObjectSchema = Schema;
