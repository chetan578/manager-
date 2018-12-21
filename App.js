import React,{Component} from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'
import ReduxThunk from 'redux-thunk'

export default class App extends React.Component {
 
  componentWillMount(){
    const config={
    apiKey: "AIzaSyB1X3-XdfmOAijmfBA0uZ3_6Zt-v_vLqzI",
    authDomain: "manager-f71e0.firebaseapp.com",
    databaseURL: "https://manager-f71e0.firebaseio.com",
    projectId: "manager-f71e0",
    storageBucket: "manager-f71e0.appspot.com",
    messagingSenderId: "1078245675859"
  };
firebase.initializeApp(config)
  }

render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <LoginForm/>
      </Provider>
    );
  }
}