/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import Head from './src/components/Head';
import reducers from './src/reducers';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
      <Provider store={createStore(reducers)}>
        <Container>
          <Head title={'Manager'} />
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </Container>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
