import { uniqueId } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IShipmentDetailsProps } from '../interfaces';

@observer
class ShipmentDetails extends React.Component<IShipmentDetailsProps, {}> {
  componentDidMount() {
    const shipmentId = this.props.match.params.shipmentId;
    this.props.store.getShipmentDetails(shipmentId);
  }

  render() {
    if (this.props.store.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <h2>{this.props.store.shipment.name}</h2>
        <div style={{ marginBottom: 10 }}>
          <p style={{ margin: 0, fontSize: 13, color: '#ababab' }}>
            Shipment id
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 3,
              fontSize: 18,
              color: '#101010',
              fontWeight: 600,
            }}
          >
            {this.props.store.shipment.id}
          </p>
        </div>
        <div>
          <p
            style={{
              margin: 0,
              marginBottom: 3,
              fontSize: 18,
              color: '#101010',
              fontWeight: 600,
            }}
          >
            {this.props.store.shipment.mode}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#ababab' }}>
            Mode of transport
          </p>
        </div>
        {/* <p>Mode of transport: {this.props.store.shipment.mode}</p> */}
        <p>Type of shipment: {this.props.store.shipment.type}</p>
        <p>Shipment destination: {this.props.store.shipment.destination}</p>
        <p>Shipment origin: {this.props.store.shipment.origin}</p>
        <p>Total: {this.props.store.shipment.origin}</p>
        <p>Status: {this.props.store.shipment.status}</p>
        <p>UserId: {this.props.store.shipment.userId}</p>
        <p>Cargo</p>
        {this.props.store.shipment.cargo &&
          this.props.store.shipment.cargo.map(el => {
            return (
              <ul key={uniqueId()}>
                <li>{el.type}</li>
                <li>{el.description}</li>
                <li>{el.volume}m</li>
              </ul>
            );
          })}
        <Link to="/">Go home</Link>
      </React.Fragment>
    );
  }
}

export default ShipmentDetails;
