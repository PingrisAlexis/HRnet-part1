import React from "react";
import styles from "./EmployeeTable.module.scss";
import {FunctionComponent} from "react";
import {EmployeeState, IEmployee} from "../../type.d";
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import { Dispatch } from "redux";
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {removeEmployee} from "../../store/actionCreators";

const EmployeeTable:FunctionComponent = ():JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch()
    const employees: readonly IEmployee[] = useSelector(
        (state: EmployeeState) => state.employees,
        shallowEqual
    )

    const deleteEmployee = (employee: IEmployee) => {
        dispatch(removeEmployee(employee))
    }


    return (
        <div  className={styles.employee_table_container}>
            <table>
                <thead>
                <tr>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>BIRTHDATE</th>
                    <th>STARTING DATE</th>
                    <th>STREET</th>
                    <th>CITY</th>
                    <th>STATE</th>
                    <th>ZIP CODE</th>
                    <th>DEPARTMENT</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee: IEmployee) => (
                    <tr
                    key={employee.id}
                    >
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.birthDate}</td>
                        <td>{employee.startingDate}</td>
                        <td>{employee.street}</td>
                        <td>{employee.city}</td>
                        <td>{employee.selectedState}</td>
                        <td>{employee.zipCode}</td>
                        <td>{employee.selectedDepartment}</td>
                        <td onClick={() => deleteEmployee(employee)}>
                            <FontAwesomeIcon  icon={faTrash} />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;