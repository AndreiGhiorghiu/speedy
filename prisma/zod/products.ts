import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteDatabase, RelatedDatabaseModel } from "./index"

export const ProductsModel = z.object({
  id: z.string(),
  sellerId: z.string(),
  buyerId: z.string().nullish(),
  status: z.string(),
  price: z.number(),
  old_price: z.number().nullish(),
  cc_num: z.string(),
  cvv2: z.string(),
  skip: z.string().nullish(),
  full_name: z.string().nullish(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
  sort_code: z.string().nullish(),
  misc: z.string().nullish(),
  exp_date: z.string().nullish(),
  exp_month: z.number().int().nullish(),
  exp_year: z.number().int().nullish(),
  zip: z.string().nullish(),
  address: z.string().nullish(),
  address2: z.string().nullish(),
  city: z.string().nullish(),
  country: z.string().nullish(),
  ip: z.string().nullish(),
  type: z.string().nullish(),
  state: z.string().nullish(),
  phone: z.string().nullish(),
  dob: z.string().nullish(),
  ssn: z.string().nullish(),
  email: z.string().nullish(),
  password: z.string().nullish(),
  mmn: z.string().nullish(),
  vbv: z.string().nullish(),
  acc_no: z.string().nullish(),
  driver_license: z.string().nullish(),
  dbVersion: z.number().int(),
  canRefund: z.boolean(),
  refundExpire: z.date().nullish(),
  wantRefund: z.boolean(),
  userId: z.string().nullish(),
  databaseId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProducts extends z.infer<typeof ProductsModel> {
  seller: CompleteUser
  buyer?: CompleteUser | null
  User?: CompleteUser | null
  database: CompleteDatabase
}

/**
 * RelatedProductsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductsModel: z.ZodSchema<CompleteProducts> = z.lazy(() => ProductsModel.extend({
  seller: RelatedUserModel,
  buyer: RelatedUserModel.nullish(),
  User: RelatedUserModel.nullish(),
  database: RelatedDatabaseModel,
}))
