import * as z from "zod"
import { CompleteSettings, RelatedSettingsModel, CompleteSessions, RelatedSessionsModel, CompleteProducts, RelatedProductsModel, CompleteDatabase, RelatedDatabaseModel, CompleteInvoice, RelatedInvoiceModel, CompleteTickets, RelatedTicketsModel, CompleteBTC_Addresses, RelatedBTC_AddressesModel, CompleteNews, RelatedNewsModel, CompleteActions, RelatedActionsModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  role: z.string(),
  password: z.string(),
  ballance: z.number().nullish(),
  secure: z.boolean().nullish(),
  status: z.string().nullish(),
  fee: z.number().nullish(),
  referenceId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  settings?: CompleteSettings | null
  Sessions: CompleteSessions[]
  SellerProducts: CompleteProducts[]
  BuyerProducts: CompleteProducts[]
  Reference: CompleteUser[]
  reference?: CompleteUser | null
  Products: CompleteProducts[]
  Database: CompleteDatabase[]
  invoices: CompleteInvoice[]
  my_tickets: CompleteTickets[]
  btc_addresses: CompleteBTC_Addresses[]
  news: CompleteNews[]
  actions: CompleteActions[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  settings: RelatedSettingsModel.nullish(),
  Sessions: RelatedSessionsModel.array(),
  SellerProducts: RelatedProductsModel.array(),
  BuyerProducts: RelatedProductsModel.array(),
  Reference: RelatedUserModel.array(),
  reference: RelatedUserModel.nullish(),
  Products: RelatedProductsModel.array(),
  Database: RelatedDatabaseModel.array(),
  invoices: RelatedInvoiceModel.array(),
  my_tickets: RelatedTicketsModel.array(),
  btc_addresses: RelatedBTC_AddressesModel.array(),
  news: RelatedNewsModel.array(),
  actions: RelatedActionsModel.array(),
}))
