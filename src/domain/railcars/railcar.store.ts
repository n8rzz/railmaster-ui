import { create } from 'zustand';
import { IRailcar } from '@/domain/railcars/railcar.types';
import { geRailcarsRequest } from '@/domain/railcars/railcar.service';

interface RailcarStoreState {
  railcars: IRailcar[];

  getRailcars: () => Promise<void>;
}

export const useRailcarStore = create<RailcarStoreState>((set) => ({
  railcars: [],
  getRailcars: async () => {
    try {
      const railcars = await geRailcarsRequest();

      set({ railcars });
    } catch (error) {
      console.error('Error fetching railcars:', error);
    }
  },
}));
