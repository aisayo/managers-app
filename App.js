import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers'
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB2WZhmM87JTTHVGpBwow-f9bXgtgUYpjg",
      authDomain: "manager-36b70.firebaseapp.com",
      databaseURL: "https://manager-36b70.firebaseio.com",
      projectId: "manager-36b70",
      storageBucket: "manager-36b70.appspot.com",
      messagingSenderId: "354757030018"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;

