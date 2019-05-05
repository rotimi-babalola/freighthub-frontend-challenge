import { Provider } from 'mobx-react';
import * as React from 'react';

import Shipments from '../components/Shipments';
import { shipmentStore } from '../stores/shipments.store';

import '../styles/app.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <Shipments store={shipmentStore} />
      </div>
    );
  }
}

export default App;
