import { z } from 'zod';
import { SessionsWhereUniqueInputObjectSchema } from './objects/SessionsWhereUniqueInput.schema';

export const SessionsDeleteOneSchema = z.object({
  where: SessionsWhereUniqueInputObjectSchema,
});
