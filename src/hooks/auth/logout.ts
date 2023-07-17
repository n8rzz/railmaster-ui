import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useLogout = () => {
  const logout = () => {
    Cookies.remove(COOKIES.User);
  };

  return { logout };
};
