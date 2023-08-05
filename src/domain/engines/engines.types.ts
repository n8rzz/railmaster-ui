export type EngineId = string;

export interface IEngine {
  fuelEfficiency: number;
  id: EngineId;
  power: number;
  status: string;
  type: string;
  userId: number;
}
