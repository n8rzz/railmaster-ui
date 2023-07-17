import { useEffect, useState } from 'react';
import { IUser } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useCurrentUser = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = Cookies.get(COOKIES.User);

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
};
