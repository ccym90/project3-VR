import { createStore, compose, combineReducers } from 'redux';
import { showGraphicReducer } from '../reducers/reducers'

export let initStore = () => {

  const reducer = combineReducers({
    showGraphic: showGraphicReducer,
    // showCompleted: showCompletedReducer,
    // todos: todoReducer,
    // name: nameReducer
  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
