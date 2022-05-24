import styles from './EmployeeList.module.scss'
import {EmployeeTable} from "../../components";

const EmployeeList:() => JSX.Element = () => {
    return (
        <main className={styles.employee_list_container}>
            <h2>Employee List</h2>
            <EmployeeTable />
        </main>
    )
}

export default EmployeeList;