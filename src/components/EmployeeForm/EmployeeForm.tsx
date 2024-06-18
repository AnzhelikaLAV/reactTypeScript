import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import {
  CheckboxContainer,
  EmployeeFormContainer,
  Checkbox,
    CheckboxLabel,
  ErrorMessage
} from "./styles";
import { EmployeeFormValues, EMPLOYEE_FORM_FIELDS } from "./types";
import Button from "components/Button/Button";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_FIELDS.NAME]: Yup.string()
      .required("Required field")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    [EMPLOYEE_FORM_FIELDS.SURNAME]: Yup.string()
      .required("Required field")
      .max(15, "Max 15 symbols"),
    [EMPLOYEE_FORM_FIELDS.AGE]: Yup.number()
      .typeError("Must be number type")
      .required("Required field")
        .min(18, "Min age - 18")
        .test('check lenghth', 'Max length 3 symbols', (value)=>String(value).length<=3),
      //.max(150, "Max age - 150"),
    [EMPLOYEE_FORM_FIELDS.POSITION]: Yup.string().max(30, "Max 30 symbols"),
    [EMPLOYEE_FORM_FIELDS.AGREEMENT]: Yup.boolean().oneOf([true], 'Accept agreement')
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_FIELDS.NAME]: "",
      [EMPLOYEE_FORM_FIELDS.SURNAME]: "",
      [EMPLOYEE_FORM_FIELDS.AGE]: "",
      [EMPLOYEE_FORM_FIELDS.POSITION]: "",
      [EMPLOYEE_FORM_FIELDS.AGREEMENT]: false, //checkbox
    } as EmployeeFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

    console.log(formik);
    
    const agreementError = formik.errors[EMPLOYEE_FORM_FIELDS.AGREEMENT]
    
  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FORM_FIELDS.NAME}
        placeholder="Enter your name"
        label="Name*"
        value={formik.values[EMPLOYEE_FORM_FIELDS.NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.SURNAME}
        placeholder="Enter your surname"
        label="Surname*"
        value={formik.values[EMPLOYEE_FORM_FIELDS.SURNAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.SURNAME]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.AGE}
        placeholder="Enter your age"
        label="Age*"
        value={formik.values[EMPLOYEE_FORM_FIELDS.AGE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.AGE]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.POSITION}
        placeholder="Enter your position"
        label="Position"
        value={formik.values[EMPLOYEE_FORM_FIELDS.POSITION]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.POSITION]}
      />
      <CheckboxContainer>
        <Checkbox
          id="agree"
          type="checkbox"
          name={EMPLOYEE_FORM_FIELDS.AGREEMENT}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FORM_FIELDS.AGREEMENT]}
        />
        <CheckboxLabel htmlFor="agree">I Agree</CheckboxLabel>
      </CheckboxContainer>
      {agreementError && <ErrorMessage>{agreementError}</ErrorMessage>}
      {/* <Button name="Create" type="submit" disabled={!formik.values[EMPLOYEE_FORM_FIELDS.AGREEMENT]} /> */}
      <Button name="Create" type="submit" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
