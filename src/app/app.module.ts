import { UniversalModule } from './universal-validator/universal-validator.module';
import { GuideModule } from './guide/guide.module';
import { RouterModule } from '@angular/router';
import { ValidatorsModule } from 'ngx-validators';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailModule } from './email-validator/email-validator.module';
import { PasswordModule } from './password-validator/password-validator.module';
import { CreditcardModule } from './creditcard-validator/creditcard-validator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    BrowserAnimationsModule,
    HttpClientModule,
    ValidatorsModule,
    GuideModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    UniversalModule,
    PasswordModule,
    EmailModule,
    CreditcardModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
