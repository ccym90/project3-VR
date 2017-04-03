import { createStore, compose, combineReducers } from 'redux';
import { locationReducer, showTextReducer, revealClueReducer} from '../reducers/reducers'

export let initStore = () => {

  const reducer = combineReducers({

    showText: showTextReducer,
    location: locationReducer,
  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
