import { CompleteUser } from '$entities.types';

export type UserMe = z.infer<typeof CompleteUser>;

export interface ApiError {
  status: string;
  title: string;
  detail: string;
  source: { pointer: string };
}

export interface ApiResponseError {
  jsonapi: { version: string };
  errors: ApiError[];
}

export interface ApiCollection<T> {
  data: {
    data: T[];
    count: number;
    options?: { [key: any]: any };
  };
}
