import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';

// Init Store
import { initStore } from './redux/store/store'
const store = initStore();

store.subscribe( () => {
  var state = store.getState();
  // setTodos(state.todos);
  console.log('New State', state);
});

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
