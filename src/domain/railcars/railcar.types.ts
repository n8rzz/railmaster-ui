export type RailcarId = string;

export interface IRailcar {
  capacity_value: string | number;
  capacity_unit: 'gal' | 'l' | 'lbs' | 'kg';
  type: string;
  id: RailcarId;
  trainId: number;
  userId: number;
}
