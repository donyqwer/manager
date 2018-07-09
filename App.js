/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAAll6BB23dC4xycq7Y-ZEYHUk5cJ-OTH4',
      authDomain: 'empmanager-d5408.firebaseapp.com',
      databaseURL: 'https://empmanager-d5408.firebaseio.com',
      projectId: 'empmanager-d5408',
      storageBucket: 'empmanager-d5408.appspot.com',
      messagingSenderId: '417312587608'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
