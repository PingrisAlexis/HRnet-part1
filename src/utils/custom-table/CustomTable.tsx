import React from "react";
import { IEmployee } from "../../type.d";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const columns:any= (deleteEmployee: Function) =>  [
    {
        key: 'firstName',
        name: 'FIRSTNAME',
        selector: (row: any) => row.firstName,
        sortable: true,
    },
    {
        key: 'lastName',
        name: 'LASTNAME',
        selector: (row: any) => row.lastName,
        sortable: true,
    },
    {
        key: 'birthDate',
        name: 'BIRTH DATE',
        selector: (row: any) => row.birthDate,
        sortable: true,
    },
    {
        key: 'startDate',
        name: 'START DATE',
        selector: (row: any) => row.startDate,
        sortable: true,
    },
    {
        key: 'selectedDepartment',
        name: 'DEPARTMENT',
        selector: (row: any) => row.selectedDepartment,
        sortable: true,
    },
    {
        key: 'street',
        name: 'STREET',
        selector: (row: any) => row.street,
        sortable: true,
    },
    {
        key: 'city',
        name: 'CITY',
        selector: (row: any) => row.city,
        sortable: true,
    },
    {
        key: 'selectedState',
        name: 'STATE',
        selector: (row: any) => row.selectedState,
        sortable: true,
    },
    {
        key: 'zipCode',
        name: 'ZIP CODE',
        selector: (row: any) => row.zipCode,
        sortable: true,
    },
    {
        key: 'operations',
        center: 'CENTER',
        cell: (employee: IEmployee) => <FontAwesomeIcon key={employee.id} icon={faTrash} color="red"  cursor="pointer" onClick={() => deleteEmployee(employee)}/>,
    },
];