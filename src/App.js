import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';

// Init Store
import { initStore } from './store/store'
const store = initStore();

//
//
//

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Main/>
      </Provider>
    );
  }
}

export default App;
