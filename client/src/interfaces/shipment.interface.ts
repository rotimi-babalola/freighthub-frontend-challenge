import { ICargo } from './cargo.interface';
import { IService } from './services.interface';

export interface IShipment {
  id: string;
  name: string;
  cargo: ICargo[];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: IService[];
  total: string;
  status: string;
  userId: string;
}
