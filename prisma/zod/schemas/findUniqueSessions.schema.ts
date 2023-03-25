import { z } from 'zod';
import { SessionsWhereUniqueInputObjectSchema } from './objects/SessionsWhereUniqueInput.schema';

export const SessionsFindUniqueSchema = z.object({
  where: SessionsWhereUniqueInputObjectSchema,
});
