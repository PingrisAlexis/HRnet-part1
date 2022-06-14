import React from "react";
import styles from "./EmployeeTable.module.scss";
import { FunctionComponent } from "react";
import { EmployeeState, IEmployee } from "../../type.d";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { removeEmployee } from "../../store/actionCreators";
import { columns } from "../../utils";
import DataTable from 'react-data-table-component';

const EmployeeTable:FunctionComponent = ():JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const employees: IEmployee[] = useSelector (
        (state: EmployeeState) => state.employees,
        shallowEqual
    )

    const deleteEmployee = (employee: IEmployee) => {
        dispatch(removeEmployee(employee))
    }
    const customStyles = {
        headCells: {
            style: {
                color: "var(--primary-color)",
                borderBottomColor: "var(--primary-color)",
                fontWeight: "normal",
                fontSize: "1.5rem"
            },
        },

    };
    /*@ts-ignore*/

    return (
        <div  className={styles.employee_table_container}>
            <DataTable
                columns={columns(deleteEmployee)}
                data={employees}
                noHeader={true}
                pagination
                customStyles={customStyles}
                className={styles.rdt_TableRow}
            />
        </div>
    )
}

export default EmployeeTable;