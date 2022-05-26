import { FormEvent, FunctionComponent, useState } from "react";
import styles from "./EmployeeForm.module.scss";
import { IEmployee } from "../../type.d";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addEmployee } from "../../store/actionCreators";
import DatePicker from "react-date-picker";
import Select  from "react-select";
import StyleConfig from "react-select";
import {DEPARTMENTS_OPTIONS, US_STATES_OPTIONS} from "../../utils";

const EmployeeForm:FunctionComponent = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<any>(maxBirthade());
    const [startDate, setStartDate] = useState<any>(new Date());
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [selectedState, setSelectedState] = useState<any>('');
    const [zipCode, setZipCode] = useState<string>('');
    const [selectedDepartment, setSelectedDepartment] = useState<any>('');

    function maxBirthade () {
        const majorityAge  = new Date();
        majorityAge.setDate(majorityAge.getDate() - 6570);

        return majorityAge;
    }
    
    const NewEmployee: IEmployee = {
        id : Math.floor((1 + Math.random()) * 0x100000000),
        firstName,
        lastName,
        birthDate : birthDate.toLocaleDateString("en-US"),
        startDate : startDate.toLocaleDateString("en-US"),
        street,
        city,
        selectedState,
        zipCode,
        selectedDepartment
    }
    
    const addNewEmployee = (e :FormEvent) => {
        e.preventDefault()
        dispatch(addEmployee(NewEmployee))
    }

    const handleStateChange = (value:any) => {
        setSelectedState(value.value);
    }
    const handleDepartmentChange = (value:any) => {
        setSelectedDepartment(value.value);
    }
    const customStyles = {
        menu: (provided:any, state:any) => ({
            ...provided,
            width: state.selectProps.width,
            borderRadius: '0.5rem',
            // border: '1px solid #ff8b67',
            padding: 20,
            // border: "1px solid red",
            // boxShadow: "1px solid red",
            border: "red",
            // boxShadow: state.isFocused ? "1px solid red" : "1px solid red",
            boxShadow:"red",
            "&:hover": {
                border: "1px solid red",
                // boxShadow: "0px 0px 6px red"
            }

            
        }),
        control: (base: any) => ({
            ...base,
            boxShadow: 'none'
        }),
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
                    maxDate={maxBirthade()}
                />
            </label>
            <label htmlFor="starting-date">
                <span className={styles.aze}>STARTING DATE</span>
                <div >
                    <DatePicker
                        className={styles.DatePicker}
                        calendarClassName={styles.calendar}
                        locale={"en-US"}
                        format={"MM/dd/y"}
                        clearIcon={null}
                        value={startDate}
                        onChange={(date:Date) => setStartDate(date)}
                        maxDate={new Date()}
                    />
                </div>
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
                <Select
                    classNamePrefix={styles.react_select}
                    className={styles.react_select_container}
                    defaultValue={selectedState}
                    onChange={handleStateChange}
                    options={US_STATES_OPTIONS}
                />
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
                <Select
                    classNamePrefix={styles.react_select}
                    className={styles.react_select_container}
                    defaultValue={selectedDepartment}
                    onChange={handleDepartmentChange}
                    options={DEPARTMENTS_OPTIONS}
                    styles={customStyles}
                />
            </label>
            <button type="submit"
            >
                Save
            </button>
        </form>
    )
}

export default EmployeeForm;