import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TicketsRelationFilterObjectSchema } from './TicketsRelationFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TicketsListRelationFilterObjectSchema } from './TicketsListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TicketsWhereInputObjectSchema),
        z.lazy(() => TicketsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TicketsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TicketsWhereInputObjectSchema),
        z.lazy(() => TicketsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    message: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reporter: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    reporterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    parent: z
      .union([
        z.lazy(() => TicketsRelationFilterObjectSchema),
        z.lazy(() => TicketsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    ticketsId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    responses: z.lazy(() => TicketsListRelationFilterObjectSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const TicketsWhereInputObjectSchema = Schema;
