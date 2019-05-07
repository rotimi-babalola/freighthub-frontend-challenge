import { uniqueId } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ShipmentDetailInfo from '../components/ShipmentDetailInfo';
import { IShipmentDetailsProps } from '../interfaces';

@observer
class ShipmentDetails extends React.Component<IShipmentDetailsProps, {}> {
  componentDidMount() {
    const shipmentId = this.props.match.params.shipmentId;
    this.props.store.getShipmentDetails(shipmentId);
  }

  render() {
    const [shipment] = this.props.store.shipment;
    if (this.props.store.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <h2>{shipment.name}</h2>
        <ShipmentDetailInfo name="Shipment id" value={shipment.id} />
        <ShipmentDetailInfo name="Mode of transport" value={shipment.mode} />
        <ShipmentDetailInfo name="Type of shipment" value={shipment.type} />
        <ShipmentDetailInfo
          name="Shipment destination"
          value={shipment.destination}
        />
        <ShipmentDetailInfo name="Shipment origin" value={shipment.origin} />
        <ShipmentDetailInfo name="Status" value={shipment.status} />
        <ShipmentDetailInfo name="User ID" value={shipment.userId} />
        <p className="shipment-info-name">Cargo</p>
        {shipment.cargo.map(el => {
          return (
            <ul key={uniqueId()}>
              <li>{el.type}</li>
              <li>{el.description}</li>
              <li>
                Volume: {el.volume}m<sup>3</sup>
              </li>
            </ul>
          );
        })}
        <p className="shipment-info-name">Services</p>
        {shipment.services.map(el => {
          return (
            <ul key={uniqueId()}>
              <li>Type: {el.type}</li>
              {el.value && <li>Value: {el.value}</li>}
            </ul>
          );
        })}
        <Link to="/">Go home</Link>
      </React.Fragment>
    );
  }
}

export default ShipmentDetails;
