import react, {useState} from "react";
import styles from './CreateEmployeeForm.module.scss'

const CreateEmployeeForm = () => {
    const [firstName, setFirstName] = useState("")

    return (
        <form className={styles.create_employee_form_container} action="#" id="create-employee">
            <label htmlFor="firstname">
                <span>FirstName</span>
                <input
                    pattern="^[a-zA-Z]+$"
                    minLength={2}
                    maxLength={15}
                    type="text"
                    name="firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>

                <label htmlFor="last-name">
                    <span>Last Name</span>
                    <input type="text" id="last-name" name="lastName"  required />
                </label>

                <label htmlFor="date-of-birth">
                    <span>Date of Birth</span>
                    <input type="date" id="date-of-birth" name="birth"  required />
                </label>

                <label htmlFor="start-date">
                    <span>Start Date</span>
                    <input type="date" id="start-date" name="startDate"  required />
                </label>

                    <label htmlFor="street">
                        <span>Street</span>
                        <input id="street" type="text" name="street"  required />
                    </label>

                    <label htmlFor="city">
                        <span>City</span>
                        <input id="city" type="text" name="city" required />
                    </label>

                    <label htmlFor="state">
                        <span>State</span>
                        <select name="state" id="state" required>
                            <option>Choose a State</option>
                        </select>
                    </label>

                    <label htmlFor="zip-code">
                        <span>Zip Code</span>
                        <input id="zip-code" type="number" name="zip"  required />
                    </label>
                <label htmlFor="department">
                    <span>Department</span>
                    <select name="department" id="department"  required>
                        <option>Choose a department</option>
                    </select>
                </label>
                <button type="submit">
                    Save
                </button>
            </form>

)
}

export default CreateEmployeeForm;