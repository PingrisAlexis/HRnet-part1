import {FormEvent, FunctionComponent, useState} from "react";
import sub from 'date-fns/sub'
import styles from "./EmployeeForm.module.scss";
import "../../utils/custom-modal/Modal.Module.css"
import { IEmployee } from "../../type.d";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addEmployee } from "../../store/actionCreators";
import DatePicker from "react-date-picker";
import Select  from "react-select";
import { customStylesReactSelect, DEPARTMENTS_SELECT_OPTIONS, US_STATES_SELECT_OPTIONS } from "../../utils";
// @ts-ignore
import { Modal }  from "@pingrisalexis/react-modal";

const EmployeeForm:FunctionComponent = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<any>(maxBirthDate());
    const [startDate, setStartDate] = useState<any>(new Date());
    const [selectedDepartment, setSelectedDepartment] = useState<string>('Sales');
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('AL');
    const [zipCode, setZipCode] = useState<string>('');

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);
    const message = "Employee Created!";
    console.log(typeof new Date())

    function maxBirthDate() {
        const today = new Date()
        return sub(today, { years: 18 })
    }

    function titleCase(str: string) {
        return str.split(' ').map(item =>
            item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join('');
    }

    const NewEmployee: IEmployee = {
        id : Math.floor((1 + Math.random()) * 0x100000000),
        lastName : lastName.toUpperCase(),
        firstName: titleCase(firstName),
        birthDate : birthDate.toLocaleDateString("en-US"),
        startDate : startDate.toLocaleDateString("en-US"),
        street,
        city,
        selectedState,
        zipCode,
        selectedDepartment
    }
    
    const addNewEmployee = (e: FormEvent) => {
        e.preventDefault()
        dispatch(addEmployee(NewEmployee))
        setIsOpen(true)
    }

    const handleStateChange = (e: any ) => {
        setSelectedState(e.value);
        // console.log(typeof e)
    }
    
    const handleDepartmentChange = (e: any) => {
        setSelectedDepartment(e.value);
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
                       required={true}
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
                       required={true}
                />
            </label>
            <label htmlFor="date-of-birth"
                   className={styles.datepicker}
            >
                <span>BIRTH DATE</span>
                <DatePicker
                    className={styles.DatePicker}
                    calendarClassName={styles.calendar}
                    locale={"en-US"}
                    format={"MM/dd/y"}
                    clearIcon={null}
                    value={birthDate}
                    onChange={(date:Date) => setBirthDate(date)}
                    maxDate={maxBirthDate()}
                />
            </label>
            <label htmlFor="starting-date">
                <span>START DATE</span>
                <div >
                    <DatePicker
                        className={styles.DatePicker}
                        calendarClassName={styles.calendar}
                        locale={"en-US"}
                        format={"MM/dd/y"}
                        clearIcon={null}
                        value={startDate}
                        onChange={(date:Date) => setStartDate(date)}
                    />
                </div>
            </label>
            <label htmlFor="department">
                <span>DEPARTMENT</span>
                <Select
                    classNamePrefix={styles.react_select}
                    className={styles.react_select_container}
                    defaultValue={DEPARTMENTS_SELECT_OPTIONS[0]}
                    onChange={handleDepartmentChange}
                    options={DEPARTMENTS_SELECT_OPTIONS}
                    styles={customStylesReactSelect}
                />
            </label>
            <label htmlFor="street">
                <span>STREET</span>
                <input id="street"
                       minLength={5}
                       type="text"
                       name="street"
                       onChange={(e) => setStreet(e.target.value)}
                       required={true}
                />
            </label>
            <label htmlFor="city">
                <span>CITY</span>
                <input id="city"
                       type="text"
                       pattern="^[a-zA-Z]+$"
                       minLength={2}
                       name="city"
                       onChange={(e) => setCity(e.target.value)}
                       required={true}
                />
            </label>
            <label htmlFor="state">
                <span>STATE</span>
                <Select
                    classNamePrefix={styles.react_select}
                    className={styles.react_select_container}
                    defaultValue={US_STATES_SELECT_OPTIONS[0]}
                    onChange={handleStateChange}
                    options={US_STATES_SELECT_OPTIONS}
                    styles={customStylesReactSelect}
                />
            </label>
            <label htmlFor="zip-code">
                <span>ZIP CODE</span>
                <input id="zip-code"
                       name="zip"
                       type="text"
                       pattern="(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)"
                       onChange={(e) => setZipCode(e.target.value)}
                       required={true}
                />
            </label>
            <button type="submit"
            >
                Save
            </button>
            { isOpen ? <Modal isOpen={isOpen} hide={toggle} content={message}/>
                : null
            }
        </form>
    )
}

export default EmployeeForm;