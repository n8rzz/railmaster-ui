import { useEffect, useState } from 'react';
import { IAuthResponse } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useCurrentToken = () => {
  const [token, setToken] = useState<IAuthResponse | null>(null);

  useEffect(() => {
    const token = Cookies.get(COOKIES.User);

    if (!token) {
      return;
    }

    setToken(JSON.parse(token));
  }, []);

  /**
   * Used to determine if a user is `logged` in or not.
   *
   * Depends on stored @{link COOKIES.User} values
   *
   * @function isLoggedIn
   * @returns boolean
   */
  function isLoggedIn(): boolean {
    return Boolean(token?.access_token);
  }

  return { isLoggedIn, user: token };
};
