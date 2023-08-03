import { IAuthResponse, IUser } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export async function getUserToken(): Promise<IAuthResponse | undefined> {
  try {
    const rawToken = Cookies.get(COOKIES.User) || '';

    return Promise.resolve(JSON.parse(rawToken) as IAuthResponse);
  } catch (error) {
    console.error(error);
  }
}

export async function getUserRequest(): Promise<IUser | undefined> {
  const token = JSON.parse(Cookies.get(COOKIES.User) || '') as IAuthResponse;

  try {
    const response = await fetch('http://localhost:3001/v1/users/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.access_token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
