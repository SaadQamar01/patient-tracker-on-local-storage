import React, { Component } from "react";
// import { Image } from 'react-native';
import { Container, Header,View, Button, Content, ActionSheet, Text, Footer, Badge,  Icon,Card, CardItem,Body,Right,DeckSwiper,Thumbnail } from "native-base";
import { connect } from 'react-redux';
import store from './../store/index.js';
import PatientForm from './patientForm.js'
import PatientList from './patientList.js';
import Patient from './../components/patients/patient.js';
import PatientData from './patientData.js';
import PatientMiddleware from '../store/middleWares/patientsMW.js';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
  function mapStateToProps(state) {
    return {
        patientsData: state.patientsData,
    };
}
function mapDispatchToProps(dispatch){
  return {
        patientDetail: (data) => dispatch( PatientMiddleware.asyncAddPatient(data)),
        loadPatients:() => {
          dispatch( PatientMiddleware.asyncLoadPatient())  
        }
        ,
        deleteAllPatients: () => dispatch( PatientMiddleware.asyncDeleteAllPatient()),
        deletePatient: (index) => dispatch( PatientMiddleware.asyncDeletePatient(index)),
  }
}

class App extends Component {

constructor(){
  super()
  this.state={

  }
}
componentDidMount(){
    this.props.loadPatients();
}
patient(data){
this.props.patientDetail(data);
// alert(data);
}
deletePatient(index){
this.props.deletePatient(index);
}
allDeletePatients(){
  this.props.deleteAllPatients();
}
  render() {
    // console.log(this.props);
    // const { navigate } = this.props.navigation;
//         store.subscribe(() =>
//   console.log(store.getState())
// )
    return (
     <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="PatientList"
              component={PatientList}
              // title="PatientList"
              hideNavBar
              initial
              />
            <Scene
              key="PatientForm"
              component={PatientForm}
              title="PatientForm"
              />
            <Scene
              key="PatientData"
              component={PatientData}
              title="PatientData"
              />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)


              