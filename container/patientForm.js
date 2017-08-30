import React, { Component } from 'react';
import store from './../store/index.js';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { TouchableOpacity, View } from 'react-native';
import PatientMiddleware from './../store/middleWares/patientsMW.js';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
import DateTimePicker from 'react-native-modal-datetime-picker';
export default class PatientForm extends Component {
  constructor() {
    super();
    this.state = {
      PatientName: '',
      DoctorName: '',
      MedicinesName: '',
      MedicineCost: '',
      Disease:'',
      date: "",
      isDateTimePickerVisible: false,
    }
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };
componentDidMount(){
     var d= new Date();
     var date=d.getFullYear() +'-'+ (d.getMonth()+1) +'-'+ (d.getDate())
     console.log(date);
     this.setState({
       date:date
     })
}
  submit() {
    patientDetails = {
      Pname: this.state.PatientName,
      Dname: this.state.DoctorName,
      Mname: this.state.MedicinesName,
      Mcost: this.state.MedicineCost,
      Disease: this.state.Disease,
      Date: this.state.date
    }
    // console.log(this.state.date);
    store.dispatch(PatientMiddleware.asyncAddPatient(patientDetails));
    alert("Patient Added")
  }
  render() {
    // console.log(this.props)
//     store.subscribe(() =>
//   console.log(store.getState())
// )
    console.log(this.props.navigation.state.params.index);

    return (
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Patient name</Label>
            <Input onChangeText={(PatientName) => this.setState({ PatientName })} />
          </Item>
          <Item floatingLabel>
            <Label>Disease</Label>
            <Input onChangeText={(Disease) => this.setState({ Disease })} />
          </Item>
          <Item floatingLabel >
            <Label>Doctor name</Label>
            <Input onChangeText={(DoctorName) => this.setState({ DoctorName })} />
          </Item>
          <Item floatingLabel >
            <Label>Medicines name</Label>
            <Input onChangeText={(MedicinesName) => this.setState({ MedicinesName })} />
          </Item>
          <Item floatingLabel >
            <Label>Medicine cost</Label>
            <Input onChangeText={(MedicineCost) => this.setState({ MedicineCost })} />
          </Item>

            <Item>
              <TouchableOpacity onPress={this._showDateTimePicker}>
              <Label>Date</Label>
                 <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 6,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 40
          }
          // ... You can check the source to find the other keys.

        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                />
            </Item>
          <Button active info full onPress={this.submit.bind(this)}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}
      