import React from "react";
import styles from "./EmployeeTable.module.scss";
import { FunctionComponent } from "react";
import { EmployeeState, IEmployee } from "../../type.d";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeEmployee } from "../../store/actionCreators";
import Table from 'rc-table';
// import {columns} from "../../utils";

const EmployeeTable:FunctionComponent = ():JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const employees: readonly IEmployee[] = useSelector(
        (state: EmployeeState) => state.employees,
        shallowEqual
    )

    const deleteEmployee = (employee: IEmployee) => {
        dispatch(removeEmployee(employee))
    }

    const columns  = [
        {
            title: 'FIRSTNAME',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'LASTNAME',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'BIRTHDATE',
            dataIndex: 'birthDate',
            key: 'birthDate',
        },
        {
            title: 'STARTDATE',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'STREET',
            dataIndex: 'street',
            key: 'street',
        },
        {
            title: 'CITY',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'STATE',
            dataIndex: 'selectedState',
            key: 'selectedState',
        },
        {
            title: 'ZIP CODE',
            dataIndex: 'zipCode',
            key: 'zipCode',
        },
        {
            title: 'DEPARTMENT',
            dataIndex: 'selectedDepartment',
            key: 'selectedDepartment',
        },
        {
            title: false,
            dataIndex: '',
            key: 'operations',
            render: (employee: IEmployee) => <FontAwesomeIcon  icon={faTrash} onClick={() => deleteEmployee(employee)}/>
        },
    ];

    return (
        <div  className={styles.employee_table_container}>
            <Table columns={columns}  data={employees} rowKey="key"/>
        </div>
    )
}

export default EmployeeTable;