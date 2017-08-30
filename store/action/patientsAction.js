export default class ActionPatient {

    // static properties to be used in reducer for switch cases
    static ADD_PATIENT = "ADD_PATIENT";
    static DELETE_PATIENT = "DELETE_PATIENT";
    static DELETE_ALL_PATIENT = "DELETE_ALL_PATIENT";


    // static functions to be mapped with dispatch in component
    static addPatient(todoArry) {
        return { 
            type: this.ADD_PATIENT,
          patientsData: todoArry}
    }
    // static deletePatient(index) {
    //     return {
    //          index:index
    //     }
    // }
    // static deleteAllPatient() {
    //     return {
    //         type: 'DELETE_ALL_TODO'
    //     }
    // }
}