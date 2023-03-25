import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseUpdateWithoutOwnerInputObjectSchema } from './DatabaseUpdateWithoutOwnerInput.schema';
import { DatabaseUncheckedUpdateWithoutOwnerInputObjectSchema } from './DatabaseUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpdateWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DatabaseUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => DatabaseUncheckedUpdateWithoutOwnerInputObjectSchema),
      ]),
    })
    .strict();

export const DatabaseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema =
  Schema;
