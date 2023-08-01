import Cookies from 'js-cookie';
import { COOKIES } from '@/domain/auth/auth.constants';

export const useLogout = () => {
  const logout = async () => {
    Cookies.remove(COOKIES.User);

    return;
  };

  return { logout };
};
