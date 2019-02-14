import {
  EmptyStringValidatorDirective,
  IsInRangeValidatorDirective,
  IsNumberValidatorDirective,
  MaxValidatorDirective,
  MinValidatorDirective,
  WhiteSpaceValidatorDirective
} from './universal/universal.directive';
import { NgModule } from '@angular/core';

import { CreditCardValidatorDirective } from './creditcard/creditcard.directive';
import { EmailValidatorDirective } from './email/email.directive';
import { PasswordValidatorDirective } from './password/password.directive';
import { EqualsToFieldDirective } from './equals-to-field/equals-to-field.directive';

@NgModule({
  declarations: [
    CreditCardValidatorDirective,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    IsInRangeValidatorDirective,
    IsNumberValidatorDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    WhiteSpaceValidatorDirective,
    EmptyStringValidatorDirective,
    EqualsToFieldDirective
  ],
  exports: [
    CreditCardValidatorDirective,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    IsInRangeValidatorDirective,
    IsNumberValidatorDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    WhiteSpaceValidatorDirective,
    EmptyStringValidatorDirective,
    EqualsToFieldDirective,
  ]
})
export class ValidatorsModule {}
