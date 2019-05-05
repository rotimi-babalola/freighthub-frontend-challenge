import { observable } from 'mobx';
import { IShipment } from './interfaces';

class ShipmentStore {
  @observable public shipments: IShipment[] = [];
}

export const shipmentStore = new ShipmentStore();
