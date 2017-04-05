import { createStore, compose, combineReducers } from 'redux';
import { signpostReducer, locationReducer, showTextReducer } from '../reducers/reducers';
import { reduxFirebase } from 'react-redux-firebase'
var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzcAtK6hNYDpGBY0lFJLIXony1CL6vi-E",
  authDomain: "vr-project-3.firebaseapp.com",
  databaseURL: "https://vr-project-3.firebaseio.com",
  projectId: "vr-project-3",
  storageBucket: "vr-project-3.appspot.com",
  messagingSenderId: "677085876207"
};
firebase.initializeApp(config);


export let initStore = () => {

  const reducer = combineReducers({

    showText: showTextReducer,
    location: locationReducer,
    signpost: signpostReducer

  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
