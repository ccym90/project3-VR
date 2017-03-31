import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';

// Init Store
import { initStore } from './store/store'
const store = initStore();

// const store = initStore();

// Save Todo's to localStorage
// store.subscribe( () => {
//   var state = store.getState();
//   setTodos(state.todos);
//   console.log('New State', state);
// });

// Load Todo's from localStorage
// var initialTodos = getTodos();
// store.dispatch(addTodos(initialTodos));

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


/*
<div className="App">
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
 */
