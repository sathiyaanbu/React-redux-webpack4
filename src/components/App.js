import React, { Component } from 'react';

import DataList from './data_list';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <h1>React/Redux - Assignment table</h1>
        <DataList />
      </div>
    );
  }
}

export default App;
