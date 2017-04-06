import { createStore, compose, combineReducers } from 'redux';
import { itemReducer, signpostReducer, locationReducer, showTextReducer } from '../reducers/reducers';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
const firebase = require("firebase");

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBzcAtK6hNYDpGBY0lFJLIXony1CL6vi-E",
  authDomain: "vr-project-3.firebaseapp.com",
  databaseURL: "https://vr-project-3.firebaseio.com",
  projectId: "vr-project-3",
  storageBucket: "vr-project-3.appspot.com",
  messagingSenderId: "677085876207"
};
// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}


// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithRedirect(provider); //this sign in redirect method most suitble for mobiles

export let initStore = () => {

  firebase.initializeApp(firebaseConfig);

  const reducer = combineReducers({
    firebase: firebaseStateReducer,
    showText: showTextReducer,
    location: locationReducer,
    signpost: signpostReducer,
    playerItems: itemReducer
  });

  // const store = createStore( reducer, compose(
  //   window.devToolsExtension ? window.devToolsExtension() : f => f
  // ));

  // Add redux Firebase to compose
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseConfig, config)
  )(createStore)

  const initialState = {
    showText: 'hk_intro',
    location: 'castle',
    signpost: {
      right: { destination: 'darkwoods', position: {x: 3, y: 1.5, z: -3}, rotation: {x:0, y:-45, z:0}, textvalue: 'To Forest', isVisible: false },
  		left: { destination: 'field', position: {x: -3, y: 1.5, z: -3}, rotation: {x:0, y:45, z:0}, textvalue: 'To Fields', isVisible: false },
    }
  };

  // Create store with reducers and initial state
  const store = createStoreWithFirebase(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
