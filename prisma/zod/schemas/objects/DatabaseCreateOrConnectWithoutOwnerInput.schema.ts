import { z } from 'zod';
import { DatabaseWhereUniqueInputObjectSchema } from './DatabaseWhereUniqueInput.schema';
import { DatabaseCreateWithoutOwnerInputObjectSchema } from './DatabaseCreateWithoutOwnerInput.schema';
import { DatabaseUncheckedCreateWithoutOwnerInputObjectSchema } from './DatabaseUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DatabaseCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => DatabaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DatabaseCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => DatabaseUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const DatabaseCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
