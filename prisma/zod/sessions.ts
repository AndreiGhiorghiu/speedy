import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const SessionsModel = z.object({
  id: z.string(),
  current: z.string(),
  userId: z.string(),
  expiresAt: z.date(),
})

export interface CompleteSessions extends z.infer<typeof SessionsModel> {
  user: CompleteUser
}

/**
 * RelatedSessionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSessionsModel: z.ZodSchema<CompleteSessions> = z.lazy(() => SessionsModel.extend({
  user: RelatedUserModel,
}))
