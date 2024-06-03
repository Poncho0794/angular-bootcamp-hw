import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function ValidateUniquePricetag(pricesArray: FormArray): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const errors = pricesArray.controls.reduce(
      (errorsArr: string[], formGroup) => {
        const dimensionInput = (formGroup as FormGroup).controls['dimension'];
        if (
          control.value &&
          control.value === dimensionInput.value &&
          control.value.length
        ) {
          errorsArr.push((control as FormControl).value);
        }
        return errorsArr as string[];
      },
      [] as string[]
    );
    return errors.length >= 2 ? { tagAlreadyUsed: errors } : null;
  };
}

@Directive({
  selector: '[appValidateUniquePricetag]',
})
export class ValidateUniquePricetagDirective implements Validator {
  @Input('pricesArray') pricesArray!: FormArray;
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return ValidateUniquePricetag(this.pricesArray)(control);
  }
}
