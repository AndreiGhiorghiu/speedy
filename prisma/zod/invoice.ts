import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const InvoiceModel = z.object({
  id: z.string(),
  code: z.string(),
  total: z.number(),
  status: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteInvoice extends z.infer<typeof InvoiceModel> {
  user: CompleteUser
}

/**
 * RelatedInvoiceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedInvoiceModel: z.ZodSchema<CompleteInvoice> = z.lazy(() => InvoiceModel.extend({
  user: RelatedUserModel,
}))
