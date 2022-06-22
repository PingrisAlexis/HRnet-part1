import * as actionTypes from "./actionTypes";
import { EmployeeAction, EmployeeState, IEmployee } from "../type.d";

const initialState: EmployeeState = {
    employees: [
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "Wendy",
            lastName: "BETHEL",
            birthDate: "8/28/2001",
            startDate: "5/2/2020",
            street: "1325 Dawson Drive",
            city: "Little Rock",
            selectedState: "AZ",
            zipCode: "72212",
            selectedDepartment: "Engineering",
        },
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "Russel",
            lastName: "LEE",
            birthDate: "4/29/1989",
            startDate: "1/5/2018",
            street: "3805 Victoria Street",
            city: "Palatine",
            selectedState: "IL",
            zipCode: "60067",
            selectedDepartment: "Sales",
        },
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "Elizabeth",
            lastName: "HILL",
            birthDate: "10/27/1970",
            startDate: "5/14/2015",
            street: "2387 Meadowbrook Road",
            city: "Manhattan Beach",
            selectedState: "CA",
            zipCode: "90266",
            selectedDepartment: "Human Resources",
        },
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "James ",
            lastName: "SAUCEDO",
            birthDate: "3/9/1982",
            startDate: "12/16/2020",
            street: "3367 Cantebury Drive",
            city: "New York",
            selectedState: "NY",
            zipCode: "10019",
            selectedDepartment: "Marketing",
        },
    ],
}

const reducer = (state: EmployeeState = initialState, action: EmployeeAction): EmployeeState => {
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE:
            const newEmployee: IEmployee = {
                id: action.employee.id,
                firstName: action.employee.firstName,
                lastName: action.employee.lastName,
                birthDate: action.employee.birthDate,
                startDate: action.employee.startDate,
                street: action.employee.street,
                city: action.employee.city,
                selectedState: action.employee.selectedState,
                zipCode: action.employee.zipCode,
                selectedDepartment: action.employee.selectedDepartment
            }
            return {
                ...state,
                employees: state.employees.concat(newEmployee),
            }
            
        case actionTypes.REMOVE_EMPLOYEE:
            const updatedEmployees: IEmployee[] = state.employees.filter(
                employee => employee.id !== action.employee.id
            )
            return {
                ...state,
                employees: updatedEmployees,
            }
    }
    return state;
}

export default reducer;
