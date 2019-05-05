import axios from 'axios';
import { action, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { IShipment } from '../interfaces';

export class ShipmentStore {
  @observable shipments: IShipment[] = [];

  @action
  getShipments() {
    instance.get('/shipments').then(response => {
      this.shipments = [...response.data];
    });
  }
}

export const shipmentStore = new ShipmentStore();
