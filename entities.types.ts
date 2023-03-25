import { z } from 'zod';
import { ProductsModel, UserModel } from './prisma/zod';

export * from './prisma/zod';

export const zAdminSettingsEntryType = z.enum([
  'input',
  'select',
  'checkbox',
  'radio',
  'none',
]);

export const zAdminSettingsEntryProps = z.array(
  z.object({
    name: z.string(),
    seller: z.boolean(),
    buyer: z.boolean(),
    show: z.boolean(),
    filterType: zAdminSettingsEntryType.optional().nullable(),
  })
);

export const zAdminSettingsData = z.object({
  database: zAdminSettingsEntryProps,
  products: zAdminSettingsEntryProps,
});

export const zAdminSettings = z.object({
  ballance: z.number().default(0),
  data: zAdminSettingsData,
});

export type AdminSettings = z.infer<typeof zAdminSettings>;

const zUserConfirmPass = z
  .object({
    password: z.string().optional().nullable(),
    confirmPassword: z.string().optional().nullable(),
    role: z.array(z.string()).or(z.string()),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password && password?.length < 5) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'The password must be at least 5 characters',
      });
    }
    if (password && confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'The passwords did not match',
      });
    }
  });

export const zUserFormDataCreate = z.union([
  UserModel,
  z
    .object({
      password: z.string(),
      confirmPassword: z.string(),
      role: z.array(z.string()).or(z.string()),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (password?.length < 5) {
        ctx.addIssue({
          code: 'custom',
          path: ['password'],
          message: 'The password must be at least 5 characters',
        });
      }
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          path: ['confirmPassword'],
          message: 'The passwords did not match',
        });
      }
    }),
]);

export const zUserSettings = z.object({
  themeSwitch: z.boolean(),
  notificationsSwitch: z.boolean(),
  alertsSwitch: z.boolean(),
  alerts: z.array(
    z.object({
      table: z.string(),
      column: z.string(),
      condition: z.string(),
      type: z.string(),
    })
  ),
});

export const zImporterStep1 = z.object({
  separator: z.enum([';', '|', ',']),
  productsString: z.string().min(10),
});

export const zImporterStep2 = z.object({
  header: z.array(z.string()),
});

export type ImporterStep1 = z.infer<typeof zImporterStep1>;
export type ImporterStep2 = z.infer<typeof zImporterStep2>;

export type UserSettings = z.infer<typeof zUserSettings>;

export const zUserFormDataUpdate = z.union([zUserConfirmPass, UserModel]);

export type UserFormDataCreate = z.infer<typeof zUserFormDataCreate>;
export type UserFormDataUpdate = z.infer<typeof zUserFormDataUpdate>;

// Zod Prisma
export type User = z.infer<typeof UserModel>;
export type Product = z.infer<typeof ProductsModel>;

export enum TicketsCategory {
  GENERAL = 'General',
  MONEY = 'Money',
  CCS = "CC's",
}

export enum TicketsStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum NewsPriority {
  LOW = 'low',
  Medium = 'medium',
  High = 'high',
}

export const zLuxuryCheckBody = z.object({
  cardnum: z.string(),
  expm: z.string(),
  expy: z.string(),
  cvv: z.string(),
});

export type LuxuryCheckBody = z.infer<typeof zLuxuryCheckBody>;

export enum ProductStatus {
  NONE = 'none',
  TIME_OFF = 'time_off',
  DEAD = 'dead',
  LIVE = 'live',
}

export enum ActionType {
  ON_VALIDATE_PAYMENT = 'ON_VALIDATE_PAYMENT',
  ON_PRODUCT_BUY = 'ON_PRODUCT_BUY',
  ON_PRODUCT_REFUND = 'ON_PRODUCT_REFUND',
  ON_PRODUCTS_IMPORT = 'ON_PRODUCTS_IMPORT',
  ON_PRODUCT_CHANGE_STATUS = 'ON_PRODUCT_CHANGE_STATUS',
}

export interface ActionData {
  [ActionType.ON_VALIDATE_PAYMENT]: {
    value_btc: number;
    value_usd: number;
    user?: string;
  };
  [ActionType.ON_PRODUCT_BUY]: {
    value: {
      price: number;
      sitePrice: number;
      sellerPrice: number;
      country: string;
      type: string;
      seller: string;
    }[];
    user?: string;
  };
  [ActionType.ON_PRODUCT_REFUND]: {
    value: {
      price: number;
      sitePrice: number;
      sellerPrice: number;
      country: string;
      type: string;
      seller: string;
    }[];
    user?: string;
  };
  [ActionType.ON_PRODUCTS_IMPORT]: {
    total: number;
    active: { cc: string; price: number; country: string | null }[];
    db_id: string;
    pending: { cc: string; price: number; country: string | null }[];

    user?: string;
  };

  [ActionType.ON_PRODUCT_CHANGE_STATUS]: {
    cc: string;
    status: string;

    user?: string;
  };
}
