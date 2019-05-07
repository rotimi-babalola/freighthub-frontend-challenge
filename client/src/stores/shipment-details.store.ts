import { action, computed, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { IShipment } from '../interfaces/shipment.interface';

export class ShipmentDetailsStore {
  @observable isLoading: boolean = true;
  @observable shipment: IShipment[] = [];
  @observable shipmentName: string = '';

  @action
  async getShipmentDetails(shipmentId: string) {
    const response = await instance.get(`/shipments/${shipmentId}`);
    this.shipment = [response.data];
    this.setShipmentName(response.data.name);
    this.isLoading = false;
  }

  @action
  async updateName(name: string, shipmentId: string) {
    const response = await instance.patch(`/shipments/${shipmentId}`, { name });
    this.setShipmentName(response.data.name);
  }

  @action
  setShipmentName(name: string) {
    this.shipmentName = name;
  }
}

export const shipmentDetailsStore = new ShipmentDetailsStore();
