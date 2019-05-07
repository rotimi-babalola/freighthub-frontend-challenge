import { action, computed, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { IShipment } from '../interfaces/shipment.interface';

export class ShipmentDetailsStore {
  @observable isLoading: boolean = true;
  @observable shipment: IShipment[] = [];

  @action
  async getShipmentDetails(shipmentId: string) {
    const response = await instance.get(`/shipments/${shipmentId}`);
    this.shipment = [response.data];
    this.isLoading = false;
  }
}

export const shipmentDetailsStore = new ShipmentDetailsStore();
