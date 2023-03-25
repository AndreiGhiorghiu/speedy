import { z } from 'zod';
import { SessionsCreateInputObjectSchema } from './objects/SessionsCreateInput.schema';
import { SessionsUncheckedCreateInputObjectSchema } from './objects/SessionsUncheckedCreateInput.schema';

export const SessionsCreateOneSchema = z.object({
  data: z.union([
    SessionsCreateInputObjectSchema,
    SessionsUncheckedCreateInputObjectSchema,
  ]),
});
