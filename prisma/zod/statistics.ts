import * as z from "zod"
import { CompleteDatabase, RelatedDatabaseModel } from "./index"

export const StatisticsModel = z.object({
  id: z.string(),
  databaseId: z.string().nullish(),
  data: z.string(),
})

export interface CompleteStatistics extends z.infer<typeof StatisticsModel> {
  Database?: CompleteDatabase | null
}

/**
 * RelatedStatisticsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedStatisticsModel: z.ZodSchema<CompleteStatistics> = z.lazy(() => StatisticsModel.extend({
  Database: RelatedDatabaseModel.nullish(),
}))
