import * as actionTypes from "./actionTypes";
import { EmployeeAction, IEmployee } from "../type.d";

export function addEmployee(employee: IEmployee) {
    const action: EmployeeAction = {
        type: actionTypes.ADD_EMPLOYEE,
        employee,
    }
    return  action;
}

export function removeEmployee(employee: IEmployee) {
    const action: EmployeeAction = {
        type: actionTypes.REMOVE_EMPLOYEE,
        employee,
    }
    return action;
}