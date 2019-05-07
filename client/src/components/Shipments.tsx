import { observer } from 'mobx-react';
import * as React from 'react';
import Pagination from '../components/Pagination';
import Select from '../components/Select';
import ShipmentCard from '../components/ShipmentCard';
import { LIMIT, TOTAL_ITEMS } from '../constants';
import { IPaginationData } from '../interfaces';
import { ShipmentStore } from '../stores/shipments.store';
import '../styles/shipments.scss';

@observer
class Shipments extends React.Component<{ store: ShipmentStore }, {}> {
  onPageChanged = (paginationData: IPaginationData) => {
    this.props.store.getShipments(paginationData.currentPage);
  };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;
    this.props.store.searchShipments(query);
  };

  showPagination = () => {
    if (this.props.store.searchQuery) {
      return false;
    }
    return true;
  };

  renderShipments = () => {
    if (
      this.props.store.searchQuery &&
      !this.props.store.filteredShipments.length
    ) {
      return <p>No results found</p>;
    }
    if (this.props.store.searchQuery) {
      return (
        <div className="shipments-container">
          {this.props.store.filteredShipments.map(shipment => {
            return (
              <ShipmentCard
                key={shipment.id}
                id={shipment.id}
                name={shipment.name}
                cargoLength={shipment.cargo.length}
                total={shipment.total}
                origin={shipment.origin}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="shipments-container">
        {this.props.store.shipments.map(shipment => {
          return (
            <ShipmentCard
              key={shipment.id}
              id={shipment.id}
              name={shipment.name}
              cargoLength={shipment.cargo.length}
              total={shipment.total}
              origin={shipment.origin}
            />
          );
        })}
      </div>
    );
  };

  render() {
    const { store } = this.props;
    if (store.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <div className="controls-container">
          <p>Total Items: {TOTAL_ITEMS}</p>
          <Select store={this.props.store} />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search by id"
            onChange={this.handleChange}
          />
        </div>
        {this.renderShipments()}
        {this.showPagination() && (
          <Pagination
            totalRecords={TOTAL_ITEMS}
            pageSize={LIMIT}
            onPageChanged={this.onPageChanged}
          />
        )}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.store.getShipments();
  }
}

export default Shipments;
