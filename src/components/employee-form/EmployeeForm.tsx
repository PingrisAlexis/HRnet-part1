import {FormEvent, FunctionComponent, useState} from 'react';
import styles from './EmployeeForm.module.scss'
import {IEmployee} from "../../type.d";
import {useDispatch} from "react-redux";
import { Dispatch } from "redux"
import {addEmployee} from "../../store/actionCreators";

const EmployeeForm:FunctionComponent = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [birthDate, setBirthDate] = useState<string>('')
    const [startingDate, setStartingDate] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [selectedState, setSelectedState] = useState<string>('')
    const [zipCode, setZipCode] = useState<string>('')
    const [selectedDepartment, setSelectedDepartment] = useState<string>('')
    
    const NewEmployee: IEmployee = {
        id : Math.floor((1 + Math.random()) * 0x100000000),
        firstName,
        lastName,
        birthDate,
        startingDate,
        street,
        city,
        selectedState,
        zipCode,
        selectedDepartment
    }
    
    const addNewEmployee= (e :FormEvent) => {
        e.preventDefault()
        console.log(NewEmployee)
        dispatch(addEmployee(NewEmployee))
    }
    
    return (
        <form className={styles.create_employee_form_container}
              action="#"
              id="create-employee"
              onSubmit={addNewEmployee}
        >
            <label htmlFor="firstname">
                <span>FIRSTNAME</span>
                <input pattern="^[a-zA-Z]+$"
                       minLength={2}
                       maxLength={15}
                       type="text"
                       name="firstname"
                       onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label htmlFor="last-name">
                <span>LASTNAME</span>
                <input pattern="^[a-zA-Z]+$"
                       minLength={2}
                       maxLength={15}
                       type="text"
                       id="last-name"
                       name="lastName"
                       onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label htmlFor="date-of-birth">
                <span>BIRTH DATE</span>
                <input type="date"
                       id="date-of-birth"
                       name="birth"
                       onChange={(e) => setBirthDate(e.target.value)}
                />
            </label>
            <label htmlFor="starting-date">
                <span>STARTING DATE</span>
                <input type="date"
                       id="starting-date"
                       name="startingDate"
                       onChange={(e) => setStartingDate(e.target.value)}
                />
            </label>
            <label htmlFor="street">
                <span>STREET</span>
                <input id="street"
                       type="text"
                       name="street"
                       onChange={(e) => setStreet(e.target.value)}
                />
            </label>
            <label htmlFor="city">
                <span>CITY</span>
                <input id="city"
                       type="text" 
                       name="city"
                       onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <label htmlFor="state">
                <span>STATE</span>
                <select name="state" 
                        id="state"
                        onChange={(e) => setSelectedState(e.target.value)}
                >
                    <option>Choose a State</option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>District Of Columbia</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                </select>
            </label>
            <label htmlFor="zip-code">
                <span>ZIP CODE</span>
                <input id="zip-code"
                       name="zip"
                       type="text"
                       pattern="(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)"
                       onChange={(e) => setZipCode(e.target.value)}
                />
            </label>
            <label htmlFor="department">
                <span>DEPARTMENT</span>
                <select name="department"
                        id="department"
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                    <option>Choose a department</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </label>
            <button type="submit">
                Save
            </button>
        </form>
    )
}

export default EmployeeForm;