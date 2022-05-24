import * as actionTypes from "./actionTypes"
import {DispatchType, EmployeeAction, IEmployee} from "../type.d";

export function addEmployee(employee: IEmployee) {
    const action: EmployeeAction = {
        type: actionTypes.ADD_EMPLOYEE,
        employee,
    }

    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function removeArticle(employee: IEmployee) {
    const action: EmployeeAction = {
        type: actionTypes.REMOVE_EMPLOYEE,
        employee,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: EmployeeAction) {
    return (dispatch: DispatchType) => {
            dispatch(action)
    }
}