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

  render() {
    const { store } = this.props;
    if (!store.shipments.length) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <Select store={this.props.store} />
        <div className="shipments-container">
          {store.shipments.map(shipment => {
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
        <Pagination
          totalRecords={TOTAL_ITEMS}
          pageSize={LIMIT}
          onPageChanged={this.onPageChanged}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.store.getShipments();
  }
}

export default Shipments;
