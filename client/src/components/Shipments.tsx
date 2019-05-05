import { uniqueId } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ShipmentStore } from '../stores/shipments.store';

@observer
class Shipments extends React.Component<{ store: ShipmentStore }, {}> {
  render() {
    const { store } = this.props;
    if (!store.shipments.length) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        {store.shipments.map(el => (
          <h1 key={uniqueId()}>{el.name}</h1>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.store.getShipments();
  }
}

export default Shipments;