import * as z from "zod"

export const SiteModel = z.object({
  id: z.string(),
  ballance: z.number(),
  data: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
