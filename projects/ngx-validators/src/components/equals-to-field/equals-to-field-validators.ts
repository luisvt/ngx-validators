import { ValidatorFn } from '@angular/forms';

export class EqualsToFieldValidators {

  static equalsToField(field: string): ValidatorFn {
    const validator = c => {
      const otherControl = c.parent.get(field);
      const otherValue = otherControl && otherControl.value;
      return c.value !== otherValue ? {equalsToField: false} : null;
    };
    return validator;
  }
}
