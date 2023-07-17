import { AuthService } from '@/domain/auth/auth.service';
import { IUser } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useLogin = () => {
  const login = async (username: string, password: string) => {
    const authService = new AuthService('/');
    const user = await authService.login(username, password);

    if (user) {
      Cookies.set(COOKIES.User, JSON.stringify(user));

      return;
    }

    return user as IUser;
  };

  return { login };
};
