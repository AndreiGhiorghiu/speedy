import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const ActionsModel = z.object({
  id: z.string(),
  type: z.string(),
  data: z.string(),
  userId: z.string().nullish(),
  created_at: z.date(),
})

export interface CompleteActions extends z.infer<typeof ActionsModel> {
  user?: CompleteUser | null
}

/**
 * RelatedActionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedActionsModel: z.ZodSchema<CompleteActions> = z.lazy(() => ActionsModel.extend({
  user: RelatedUserModel.nullish(),
}))
