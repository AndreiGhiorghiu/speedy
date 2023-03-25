import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const SettingsModel = z.object({
  id: z.string(),
  userId: z.string(),
  importerPresets: z.string(),
  theme: z.string(),
  canNotify: z.boolean(),
  canAlert: z.boolean(),
  alerts: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSettings extends z.infer<typeof SettingsModel> {
  user: CompleteUser
}

/**
 * RelatedSettingsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSettingsModel: z.ZodSchema<CompleteSettings> = z.lazy(() => SettingsModel.extend({
  user: RelatedUserModel,
}))
