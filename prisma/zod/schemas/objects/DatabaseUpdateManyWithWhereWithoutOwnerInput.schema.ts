import { z } from 'zod';
import { DatabaseScalarWhereInputObjectSchema } from './DatabaseScalarWhereInput.schema';
import { DatabaseUpdateManyMutationInputObjectSchema } from './DatabaseUpdateManyMutationInput.schema';
import { DatabaseUncheckedUpdateManyWithoutDatabaseInputObjectSchema } from './DatabaseUncheckedUpdateManyWithoutDatabaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => DatabaseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DatabaseUpdateManyMutationInputObjectSchema),
      z.lazy(() => DatabaseUncheckedUpdateManyWithoutDatabaseInputObjectSchema),
    ]),
  })
  .strict();

export const DatabaseUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
