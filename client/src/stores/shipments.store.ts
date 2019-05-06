import axios from 'axios';
import { action, computed, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { LIMIT } from '../constants';
import { IShipment } from '../interfaces';

export class ShipmentStore {
  @observable shipments: IShipment[] = [];

  @computed get totalNumberOfShipments() {
    return this.shipments.length;
  }

  @action
  getShipments(page: number = 1, limit: number = LIMIT) {
    instance.get(`/shipments?_page=${page}&_limit=${limit}`).then(response => {
      this.shipments = response.data;
    });
  }
}

export const shipmentStore = new ShipmentStore();
