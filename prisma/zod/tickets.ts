import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const TicketsModel = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  message: z.string(),
  status: z.string(),
  reporterId: z.string(),
  ticketsId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteTickets extends z.infer<typeof TicketsModel> {
  reporter: CompleteUser
  parent?: CompleteTickets | null
  responses: CompleteTickets[]
}

/**
 * RelatedTicketsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTicketsModel: z.ZodSchema<CompleteTickets> = z.lazy(() => TicketsModel.extend({
  reporter: RelatedUserModel,
  parent: RelatedTicketsModel.nullish(),
  responses: RelatedTicketsModel.array(),
}))
