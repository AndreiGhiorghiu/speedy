import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteProducts, RelatedProductsModel, CompleteStatistics, RelatedStatisticsModel } from "./index"

export const DatabaseModel = z.object({
  id: z.string(),
  name: z.string(),
  ownerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.string(),
  statisticsId: z.string().nullish(),
})

export interface CompleteDatabase extends z.infer<typeof DatabaseModel> {
  owner: CompleteUser
  products: CompleteProducts[]
  statistics?: CompleteStatistics | null
}

/**
 * RelatedDatabaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDatabaseModel: z.ZodSchema<CompleteDatabase> = z.lazy(() => DatabaseModel.extend({
  owner: RelatedUserModel,
  products: RelatedProductsModel.array(),
  statistics: RelatedStatisticsModel.nullish(),
}))
