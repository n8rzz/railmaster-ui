import { create } from 'zustand';
import { getUser } from '@/domain/users/users.service';
import { IUser } from '@/domain/auth/auth.types';

interface UserStoreState {
  permissions: unknown[];
  user: IUser | undefined;

  getUser: () => Promise<void>;
}

export const useUserStore = create<UserStoreState>((set) => ({
  permissions: [],
  user: undefined,
  getUser: async () => {
    try {
      const user = await getUser();

      set({ user });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
}));
