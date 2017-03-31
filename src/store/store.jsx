import { createStore, compose, combineReducers } from 'redux';
// import { todoReducer, nameReducer, searchTextReducer, showCompletedReducer } from '../reducers/reducers'

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
