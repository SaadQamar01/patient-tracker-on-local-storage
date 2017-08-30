import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import store from './../store/index.js';
import Patient from './../components/patients/patient.js'
import PatientMiddleware from './../store/middleWares/patientsMW.js';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
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
class PatientList extends Component {
  constructor(){
    super();
  this.state={
    search:''

  }  
  }
  
  deletePatient(index){
    alert(index)
    store.dispatch(PatientMiddleware.asyncDeletePatient(index));
    alert("Patient Deleted");
  }
  searchByKuchBhee = (obj) => { 
    // console.log(Pname);
    console.log(this.state.search);
   return obj.Pname.search(this.state.search) >= 0 || obj.Date.search(this.state.search) >= 0;
  }
  // searchByDate = (obj) => { 
  //   // console.log(Date);
  //   // console.log(this.state.search);
  //   this.state.search ? obj.Date ===  
  //  return Date.search(this.state.search) >= 0? true : false
  // }
  render() {
    // console.log(this.props);
    // console.log(this.props.patientsData);
    let notes;
    if(this.props.patientsData){
     notes = this.props.patientsData.filter(this.searchByKuchBhee).map((val, key) => {
      return <Patient key={key} keyval={key} val={val} deletePatient={()=>this.deletePatient(key)}/>
    });
  }

    return (
      <View style={styles.container}>
        <View >
          <Header searchBar rounded style={styles.header}>
            <Item>
              <Icon name="ionic" />
              <Input placeholder="Search" onChangeText={(search)=> this.setState({search})}/>
              <Icon name="person" />
            </Item>
          </Header>
        </View>
        <ScrollView style={styles.scrollContainer}>
        {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={() => Actions.PatientForm({ name: 'Saad' })} >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.textInput}></Text>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(PatientList)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#E91E63',
    height: 90,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderBottomWidth: 10,
    // borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: '#E01E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: -50,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#252525',
    borderTopWidth: 10,
    borderTopColor: '#ededed',
  }
});