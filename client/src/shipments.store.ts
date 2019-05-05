import { IShipment } from './interfaces';

class ShipmentStore {
  public shipments: IShipment[] = [];
}

export const shipmentStore = new ShipmentStore();
