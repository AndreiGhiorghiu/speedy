import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const NewsModel = z.object({
  id: z.string(),
  title: z.string(),
  priority: z.string(),
  description: z.string(),
  authorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteNews extends z.infer<typeof NewsModel> {
  author: CompleteUser
}

/**
 * RelatedNewsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedNewsModel: z.ZodSchema<CompleteNews> = z.lazy(() => NewsModel.extend({
  author: RelatedUserModel,
}))
