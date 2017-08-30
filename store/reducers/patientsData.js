import React from 'react';
import ActionPatient from '../action/patientsAction.js'


function patientData(state = [], action) {
  switch (action.type) {
    case ActionPatient.ADD_PATIENT:
    // console.log(action.patientsData);
      return action.patientsData
    // case ActionPatient.DELETE_PATIENT:
    //   state.splice(action.index, 1)
    //   return state
    // case ActionPatient.DELETE_ALL_PATIENT:
    //   state.splice(0)
    //   return state
    default:
      return state
  }
}
export default patientData;