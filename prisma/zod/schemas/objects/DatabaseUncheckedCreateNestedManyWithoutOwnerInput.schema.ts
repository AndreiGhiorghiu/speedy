import { z } from 'zod';
import { DatabaseCreateWithoutOwnerInputObjectSchema } from './DatabaseCreateWithoutOwnerInput.schema';
import { DatabaseUncheckedCreateWithoutOwnerInputObjectSchema } from './DatabaseUncheckedCreateWithoutOwnerInput.schema';
import { DatabaseCreateOrConnectWithoutOwnerInputObjectSchema } from './DatabaseCreateOrConnectWithoutOwnerInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUncheckedCreateNestedManyWithoutOwnerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DatabaseCreateWithoutOwnerInputObjectSchema),
          z.lazy(() => DatabaseCreateWithoutOwnerInputObjectSchema).array(),
          z.lazy(() => DatabaseUncheckedCreateWithoutOwnerInputObjectSchema),
          z
            .lazy(() => DatabaseUncheckedCreateWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DatabaseCreateOrConnectWithoutOwnerInputObjectSchema),
          z
            .lazy(() => DatabaseCreateOrConnectWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
          z.lazy(() => DatabaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DatabaseUncheckedCreateNestedManyWithoutOwnerInputObjectSchema =
  Schema;
