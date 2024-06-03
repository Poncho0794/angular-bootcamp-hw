import { FormArray, FormGroup } from '@angular/forms';

export const checkErrorsInForm = (form: FormGroup) => {
  const formNames = Object.keys(form.controls);
  const errors = formNames.reduce((errorsArray, inputName) => {
    const inputOrFormArray: FormArray = form.controls[inputName] as FormArray;
    // if it's an FormArray
    if (inputOrFormArray.controls) {
      const tmpErrors: string[] = inputOrFormArray.controls.reduce(
        (errorsArray, form) => {
          return errorsArray.concat(checkErrorsInForm(form as FormGroup));
        },
        [] as string[]
      );
      //inputErrors.concat(tmpErrors);
      return errorsArray.concat(tmpErrors);
    } else if (inputOrFormArray.errors) {
      const { errors } = inputOrFormArray;
      const tmpErrors: string[] = [];
      // Else is a form control
      Object.keys(errors).forEach((err) => {
        const errorMessages: { [attr: string]: string } = {
          tagAlreadyUsed: `Dimension ${errors[err][0]} esta repetida`,
          required: `${inputName} es requerido`,
          pattern: `Dimension ${inputOrFormArray.value} no cumple con el formato ##x##`,
        };
        tmpErrors.push(errorMessages[err]);
      });
      return errorsArray.concat(tmpErrors);
    } else return errorsArray;
  }, [] as string[]);
  return errors;
};
