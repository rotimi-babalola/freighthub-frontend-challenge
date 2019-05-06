import { uniqueId } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import ShipmentCard from '../components/ShipmentCard';
import { ShipmentStore } from '../stores/shipments.store';

import '../styles/shipments.scss';

@observer
class Shipments extends React.Component<{ store: ShipmentStore }, {}> {
  render() {
    const { store } = this.props;
    if (!store.shipments.length) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="shipments-container">
        <ShipmentCard />
        <ShipmentCard />
        <ShipmentCard />
        <ShipmentCard />
      </div>
    );
  }

  componentDidMount() {
    this.props.store.getShipments();
  }
}

export default Shipments;
