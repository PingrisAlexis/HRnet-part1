import {IEmployee} from "../../type.d";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {removeEmployee} from "../../store/actionCreators";

export const columns  = [
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
        // render: (employee: IEmployee) => <FontAwesomeIcon  icon={faTrash} onClick={() => deleteEmployee(employee)}/>
    },
];