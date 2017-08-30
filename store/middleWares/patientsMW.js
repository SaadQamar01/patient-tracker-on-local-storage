import ActionPatient from "./../action/patientsAction.js";
import { AsyncStorage } from 'react-native'
//Update in counter 13 -- create Middleware
export default class PatientMiddleware {

    static asyncAddPatient(patientObj) {
        var patientsArray = [];
        return (dispatch) => {
            try {
                const data = AsyncStorage.getItem('patients').then(data => {
                    if (data == null) {
                        patientsArray[0] = patientObj;
                        AsyncStorage.setItem('patients', JSON.stringify(patientsArray), () => {
                            AsyncStorage.getItem('patients', (err, result) => {
                                patients = JSON.parse(result)
                                dispatch(ActionPatient.addPatient(patients));
                            });
                        });
                    }
                    else {
                        data = JSON.parse(data)
                        // patientsArray = [...data, patientObj];
                        data.push(patientObj)
                        AsyncStorage.setItem('patients', JSON.stringify(data), () => {
                            AsyncStorage.getItem('patients', (err, result) => {
                                patients = JSON.parse(result);
                                //     patientsArray = [result]
                                //     patientsArray[data.length] = patientObj;
                                dispatch(ActionPatient.addPatient(patients));
                            });
                        });
                    }
                })

            }
            catch (error) {
                alert(error);
            }
        }
    }
    static asyncLoadPatient() {
        return (dispatch) => {
            AsyncStorage.getItem('patients', (err, result) => {
                patients = JSON.parse(result);
                // AsyncStorage.removeItem('patients')
                // console.log("data",patients);
                dispatch(ActionPatient.addPatient(patients));
            });
        }
    }
    static asyncDeletePatient(index) {
        // console.log("test ",data);
        return (dispatch) => {
            console.log(index);
            var patientArry=[];
            AsyncStorage.getItem('patients', (err, result) => {
                patientArry = JSON.parse(result);
                console.log(patientArry)
                patientArry.splice(index,1);
                console.log(patientArry);
                AsyncStorage.setItem('patients',JSON.stringify(patientArry));
                dispatch(ActionPatient.addPatient(patientArry));
            })
        }
    }
    static asyncDeleteAllPatient() {
        // console.log("test ",data);
        return (dispatch) => {
            var newArray=[];
            AsyncStorage.getItem('patients', (err, result) => {
                patients = JSON.parse(result);
                newArray = patients.splice(0);
                dispatch(ActionPatient.addPatient(newArray));
            })
        }
    }
    }
