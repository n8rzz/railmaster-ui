import { useEffect, useState } from 'react';
import { IUser } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useCurrentUser = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = Cookies.get(COOKIES.User);

    if (!user) {
      return;
    }

    setUser(JSON.parse(user));
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
    return Boolean(user?.access_token);
  }

  return { isLoggedIn, user };
};
