import { createStore, compose, combineReducers } from 'redux';

export let initStore = () => {

  const reducer = combineReducers({
    // searchText: searchTextReducer,
    // showCompleted: showCompletedReducer,
    // todos: todoReducer,
    // name: nameReducer
  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
