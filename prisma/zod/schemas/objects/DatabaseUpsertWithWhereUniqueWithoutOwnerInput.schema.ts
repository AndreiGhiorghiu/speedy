import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseUpdateWithoutOwnerInputObjectSchema } from './DatabaseUpdateWithoutOwnerInput.schema';
import { DatabaseUncheckedUpdateWithoutOwnerInputObjectSchema } from './DatabaseUncheckedUpdateWithoutOwnerInput.schema';
import { DatabaseCreateWithoutOwnerInputObjectSchema } from './DatabaseCreateWithoutOwnerInput.schema';
import { DatabaseUncheckedCreateWithoutOwnerInputObjectSchema } from './DatabaseUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpsertWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DatabaseUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => DatabaseUncheckedUpdateWithoutOwnerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DatabaseCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => DatabaseUncheckedCreateWithoutOwnerInputObjectSchema),
      ]),
    })
    .strict();

export const DatabaseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema =
  Schema;
