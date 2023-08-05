import { create } from 'zustand';
import { getUserRequest, getUserToken } from '@/domain/users/users.service';
import { IUser } from '@/domain/auth/auth.types';

interface UserStoreState {
  access_token: string;
  permissions: string[];
  user: IUser | undefined;

  getUser: () => Promise<void>;
}

export const useUserStore = create<UserStoreState>((set) => ({
  access_token: '',
  permissions: [],
  user: undefined,
  getToken: async () => {
    try {
      const token = await getUserToken();

      set({
        access_token: token?.access_token || '',
        permissions: token?.permissions || [],
      });
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  },
  getUser: async () => {
    try {
      const user = await getUserRequest();

      set({ user });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
}));
