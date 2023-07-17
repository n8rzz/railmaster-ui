export type Permission = string

export interface IAuthResponse {
  access_token: string
  permissions: Permission[]
}

export interface IUser extends IAuthResponse {}
