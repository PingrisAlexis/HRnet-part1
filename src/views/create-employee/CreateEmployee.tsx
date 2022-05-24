import styles from './CreateEmployee.module.scss'

import {EmployeeForm} from "../../components";

const CreateEmployee:() => JSX.Element = () => {
    return (
        <main className={styles.create_employee_container}>
            <h2>Add an Employee</h2>
            <EmployeeForm/>
        </main>
    )
}

export default CreateEmployee;