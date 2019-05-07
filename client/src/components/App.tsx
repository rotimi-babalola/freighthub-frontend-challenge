import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShipmentDetails from '../components/ShipmentDetails';
import Shipments from '../components/Shipments';
import { shipmentStore } from '../stores/shipments.store';

import '../styles/app.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading">FreightHub shipments</h1>
        <Router>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => {
                return <Shipments {...props} store={shipmentStore} />;
              }}
            />
            <Route
              exact={true}
              path="/shipments/:shipmentId"
              render={props => {
                return <ShipmentDetails {...props} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
