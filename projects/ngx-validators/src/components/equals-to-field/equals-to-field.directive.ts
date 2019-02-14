import { Directive, forwardRef, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EqualsToFieldValidators } from './equals-to-field-validators';

@Directive({
  selector: '[equalsToField][ngModel], [equalsToField][formControlName], [equalsToField][formControl]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualsToFieldDirective), multi: true}]
})
export class EqualsToFieldDirective implements Validator, OnDestroy {

  @Input() nevEqualsToField: string;

  private subscription: Subscription;

  validate(c: AbstractControl): ValidationErrors | null {
    if (!this.subscription) {
      this.subscription = c.parent.get(this.nevEqualsToField).valueChanges
        .pipe(delay(1)).subscribe(() => {
          c.setErrors({...c.errors, ...this.validate(c)});
        });
    }

    return EqualsToFieldValidators.equalsToField(this.nevEqualsToField)(c);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
