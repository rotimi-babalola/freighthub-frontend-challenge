import { action, computed, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { IShipment } from '../interfaces/shipment.interface';

export class ShipmentDetailsStore {
  @observable isLoading: boolean = false;
  @observable shipment: Partial<IShipment> = {};

  @action
  async getShipmentDetails(shipmentId: string) {
    this.isLoading = true;
    const response = await instance.get(`/shipments/${shipmentId}`);
    this.shipment = response.data;
    this.isLoading = false;
  }
}

export const shipmentDetailsStore = new ShipmentDetailsStore();
