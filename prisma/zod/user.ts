import * as z from "zod"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  role: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
