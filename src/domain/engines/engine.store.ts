import { create } from 'zustand';
import { IEngine } from '@/domain/engines/engines.types';
import { getEnginesRequest } from '@/domain/engines/engines.service';

interface EngineStoreState {
  engines: IEngine[];

  getEngines: () => Promise<void>;
}

export const useEngineStore = create<EngineStoreState>((set) => ({
  engines: [],
  getEngines: async () => {
    try {
      const engines = await getEnginesRequest();

      set({ engines });
    } catch (error) {
      console.error('Error fetching engines:', error);
    }
  },
}));
