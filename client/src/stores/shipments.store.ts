import { action, computed, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { LIMIT } from '../constants';
import { IShipment } from '../interfaces';

export class ShipmentStore {
  @computed get totalNumberOfShipments() {
    return this.shipments.length;
  }

  @observable shipments: IShipment[] = [];

  @action
  getShipments(page: number = 1, limit: number = LIMIT) {
    instance.get(`/shipments?_page=${page}&_limit=${limit}`).then(response => {
      this.shipments = response.data.map((el: IShipment) => {
        return {
          ...el,
          total: Number(el.total),
        };
      });
    });
  }

  @action
  sortShipments(sortByField: string) {
    this.shipments = this.shipments.slice().sort((a, b) => {
      if (a[sortByField] > b[sortByField]) {
        return -1;
      }
      if (a[sortByField] < b[sortByField]) {
        return 1;
      }
      return 0;
    });
  }
}

export const shipmentStore = new ShipmentStore();
