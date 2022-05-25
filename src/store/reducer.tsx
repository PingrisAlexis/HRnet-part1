import * as actionTypes from "./actionTypes"
import {EmployeeAction, EmployeeState, IEmployee} from "../type.d";

const initialState: EmployeeState = {
    employees: [
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "Wendy",
            lastName: "Bethel",
            birthDate: "August 28, 2001",
            startingDate: "Mai 2, 2020",
            street: "1325 Dawson Drive",
            city: "Little Rock",
            selectedState: "Arizona",
            zipCode: "72212",
            selectedDepartment: "Engineering",
        },
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "Russel",
            lastName: "Lee",
            birthDate: "April 29, 1989",
            startingDate: "January 5, 2018",
            street: "3805 Victoria Street",
            city: "Palatine",
            selectedState: "Illinois",
            zipCode: "60067",
            selectedDepartment: "Sales",
        },
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "Elizabeth",
            lastName: "Hill",
            birthDate: "October 27, 1960",
            startingDate: "May 14, 2005",
            street: "2387 Meadowbrook Road",
            city: "Manhattan Beach",
            selectedState: "California",
            zipCode: "90266",
            selectedDepartment: "Human Resources",
        },
        {
            id: Math.floor((1 + Math.random()) * 0x100000000),
            firstName: "James ",
            lastName: "Saucedo",
            birthDate: "March 9, 1952",
            startingDate: "December 17, 1999",
            street: "3367 Cantebury Drive",
            city: "New York,",
            selectedState: "New York",
            zipCode: "10019",
            selectedDepartment: "Marketing",
        },
    ],
}

const reducer = (state: EmployeeState = initialState, action: EmployeeAction
): EmployeeState => {
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE:
            const newEmployee: IEmployee = {
                id: action.employee.id,
                firstName: action.employee.firstName,
                lastName: action.employee.lastName,
                birthDate: action.employee.birthDate,
                startingDate: action.employee.startingDate,
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
