import { IAuthResponse } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';
import { ITrain } from '@/domain/trains/train.types';

export async function getTrainsRequest(): Promise<ITrain[] | undefined> {
  const token = JSON.parse(Cookies.get(COOKIES.User) || '') as IAuthResponse;

  try {
    const response = await fetch('http://localhost:3001/v1/trains', {
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
