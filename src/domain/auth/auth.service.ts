import axios, { AxiosInstance } from 'axios'
import { IAuthResponse } from '@/domain/auth/auth.types'

export class AuthService {
  protected readonly instance: AxiosInstance

  constructor(baseUrl: string) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 30000,
      timeoutErrorMessage: 'Network time out.',
    })
  }

  public async login(username: string, password: string) {
    const response: IAuthResponse = await this.instance.post('/api/login', {
      username,
      password,
    })

    return {
      access_token: response.access_token,
      permissions: response.permissions,
    }
  }
}
