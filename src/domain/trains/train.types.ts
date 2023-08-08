export type RailcarId = string;

export type TrainId = string;

export interface ITrain {
  capacity: number;
  maxSpeed: number;
  status: 'active';
  id: TrainId;
  userId: number;
}
