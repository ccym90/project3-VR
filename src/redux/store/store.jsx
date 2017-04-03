import { createStore, compose, combineReducers } from 'redux';
import { showTextReducer } from '../reducers/reducers'

export let initStore = () => {

  const reducer = combineReducers({
    showText: showTextReducer,
    // showCompleted: showCompletedReducer,
    // todos: todoReducer,
    // name: nameReducer
  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
