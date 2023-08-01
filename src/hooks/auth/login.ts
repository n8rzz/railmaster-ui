import { AuthService } from '@/domain/auth/auth.service';
import { IUser } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useLogin = () => {
  const login = async (email: string, password: string) => {
    const url = process.env.BASE_API_URL || 'http://localhost:3001';
    const authService = new AuthService(url);
    const user = await authService.login(email, password);

    if (user) {
      Cookies.set(COOKIES.User, JSON.stringify(user));

      return;
    }

    return user as IUser;
  };

  return { login };
};
