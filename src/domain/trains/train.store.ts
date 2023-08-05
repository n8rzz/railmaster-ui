import { create } from 'zustand';
import { getTrainsRequest } from '@/domain/trains/train.service';
import { ITrain } from '@/domain/trains/train.types';

interface TrainStoreState {
  trains: ITrain[];

  getTrains: () => Promise<void>;
}

export const useTrainStore = create<TrainStoreState>((set) => ({
  trains: [],
  getTrains: async () => {
    try {
      const trains = await getTrainsRequest();

      set({ trains });
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  },
}));
