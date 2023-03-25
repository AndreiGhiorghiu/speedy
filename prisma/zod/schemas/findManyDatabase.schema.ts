import { z } from 'zod';
import { DatabaseOrderByWithRelationInputObjectSchema } from './objects/DatabaseOrderByWithRelationInput.schema';
import { DatabaseWhereInputObjectSchema } from './objects/DatabaseWhereInput.schema';
import { DatabaseWhereUniqueInputObjectSchema } from './objects/DatabaseWhereUniqueInput.schema';
import { DatabaseScalarFieldEnumSchema } from './enums/DatabaseScalarFieldEnum.schema';

export const DatabaseFindManySchema = z.object({
  orderBy: z
    .union([
      DatabaseOrderByWithRelationInputObjectSchema,
      DatabaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DatabaseWhereInputObjectSchema.optional(),
  cursor: DatabaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DatabaseScalarFieldEnumSchema).optional(),
});
