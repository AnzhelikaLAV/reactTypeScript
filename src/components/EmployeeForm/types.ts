export interface EmployeeFormValues {
  name: string;
  surname: string;
  age: string;
  position: string;
  agreement: boolean;
}

export enum EMPLOYEE_FORM_FIELDS {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  POSITION = "position",
  AGREEMENT = "agreement",
}
