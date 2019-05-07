import { action, computed, observable } from 'mobx';

import instance from '../config/axiosConfig';
import { LIMIT } from '../constants';
import { IShipment } from '../interfaces';

export class ShipmentStore {
  @computed get totalNumberOfShipments() {
    return this.shipments.length;
  }

  @observable shipments: IShipment[] = [];
  @observable filteredShipments: IShipment[] = [];
  @observable isLoading: boolean = false;
  @observable searchQuery?: string;

  @action
  async getShipments(page: number = 1, limit: number = LIMIT) {
    this.isLoading = true;
    const response = await instance.get(
      `/shipments?_page=${page}&_limit=${limit}`,
    );

    this.shipments = response.data.map((el: IShipment) => {
      return {
        ...el,
        total: Number(el.total),
      };
    });
    this.isLoading = false;
  }

  @action
  searchShipments(query: string) {
    this.searchQuery = query;
    this.filteredShipments = this.shipments.filter(item => {
      return item.id.toLowerCase().search(query.toLowerCase()) !== -1;
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
