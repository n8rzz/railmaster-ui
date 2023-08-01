import { AuthService } from '@/domain/auth/auth.service';
import { IUser } from '@/domain/auth/auth.types';
import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

/**
 * Exposes a function 'login()', that calls the `/login` endpoint
 * and returns an {@link IAuthResponse}
 *
 */
export const useLogin = () => {
  const login = async (email: string, password: string): Promise<IUser> => {
    const url = process.env.BASE_API_URL || 'http://localhost:3001';
    const authService = new AuthService(url);
    const user = await authService.login(email, password);

    if (user) {
      Cookies.set(COOKIES.User, JSON.stringify(user));
    }

    return user as IUser;
  };

  return { login };
};
