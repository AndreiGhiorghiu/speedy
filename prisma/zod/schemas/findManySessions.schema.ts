import { z } from 'zod';
import { SessionsOrderByWithRelationInputObjectSchema } from './objects/SessionsOrderByWithRelationInput.schema';
import { SessionsWhereInputObjectSchema } from './objects/SessionsWhereInput.schema';
import { SessionsWhereUniqueInputObjectSchema } from './objects/SessionsWhereUniqueInput.schema';
import { SessionsScalarFieldEnumSchema } from './enums/SessionsScalarFieldEnum.schema';

export const SessionsFindManySchema = z.object({
  orderBy: z
    .union([
      SessionsOrderByWithRelationInputObjectSchema,
      SessionsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SessionsWhereInputObjectSchema.optional(),
  cursor: SessionsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SessionsScalarFieldEnumSchema).optional(),
});
