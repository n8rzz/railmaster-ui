export type Permission = string;

export interface IAuthResponse {
  access_token: string;
  permissions: Permission[];
}
export interface IAuthResponseData {
  data: IAuthResponse;
}

export interface IUser {
  email: string;
  sub: number;
}
