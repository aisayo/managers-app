import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'
import ReduxThunk from 'redux-thunk'; //this is wiring up a middleware


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;

