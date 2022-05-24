export interface IEmployee {
    id: number
    firstName: string
    lastName: string
    birthDate: string
    startingDate: string
    street: string
    city: string
    selectedState: string
    zipCode: string
    selectedDepartment: string
}

export type EmployeeState = {
    employees: IEmployee[]
}

export type EmployeeAction = {
    type: string
    employee: IEmployee
}

export type DispatchType = (args: EmployeeAction) => EmployeeAction