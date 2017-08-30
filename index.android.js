import React, { Component } from 'react';
import App from './container/app.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import PatientList from './container/patientList.js';
import PatientForm from './container/patientForm.js';
// import PatientDtails from './container/patientDetails.js';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
// import {  TabNavigator } from 'react-navigation';
// import MyHeader from './components/header.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PatientsApp extends Component {

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


// const AppPatients = TabNavigator({
//   Home: { screen: PatientsApp },
//   Add_Patient: { screen: PatientForm },
// })
AppRegistry.registerComponent('PatientsApp', () => PatientsApp);
