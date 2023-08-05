import { IAuthResponse } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';
import { IEngine } from '@/domain/engines/engines.types';

export async function getEnginesRequest(): Promise<IEngine[] | undefined> {
  const token = JSON.parse(Cookies.get(COOKIES.User) || '') as IAuthResponse;

  try {
    const response = await fetch('http://localhost:3001/v1/engines', {
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
