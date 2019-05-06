import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Shipments from '../components/Shipments';
import { shipmentStore } from '../stores/shipments.store';

import '../styles/app.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="app-container">
          <h1>FreightHub shipments</h1>
          <Shipments store={shipmentStore} />
        </div>
      </Router>
    );
  }
}

export default App;
