import { createStore, compose, combineReducers } from 'redux';
<<<<<<< HEAD
import { locationReducer, showTextReducer, timeReducer } from '../reducers/reducers';
=======
import { signpostReducer, locationReducer, showTextReducer, revealClueReducer} from '../reducers/reducers';
>>>>>>> 7ad96b512cc6dabee1952b06886eb70ed00c2276
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
<<<<<<< HEAD
    
=======
    signpost: signpostReducer
>>>>>>> 7ad96b512cc6dabee1952b06886eb70ed00c2276
  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
