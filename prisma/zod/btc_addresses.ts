import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const BTC_AddressesModel = z.object({
  id: z.string(),
  userId: z.string(),
  address: z.string(),
  status: z.string(),
  received_btc: z.number(),
  received_usd: z.number(),
  currentBtcPrice: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteBTC_Addresses extends z.infer<typeof BTC_AddressesModel> {
  user: CompleteUser
}

/**
 * RelatedBTC_AddressesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBTC_AddressesModel: z.ZodSchema<CompleteBTC_Addresses> = z.lazy(() => BTC_AddressesModel.extend({
  user: RelatedUserModel,
}))
