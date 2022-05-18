import react from 'react';
import styles from './CreateEmployee.module.scss'

import {CreateEmployeeForm} from "../../components";

const CreateEmployee = () => {
    return (
        <main className={styles.create_employee_container}>
            <h2>Create Employee</h2>
            <CreateEmployeeForm />
        </main>
    )
}

export default CreateEmployee;