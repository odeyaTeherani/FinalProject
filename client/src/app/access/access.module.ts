import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AccessRoutes} from './access-routing';
import {FlexModule} from '@angular/flex-layout';
import { ForgetPasswordValidationComponent } from './forget-password/forget-password-validation/forget-password-validation.component';


@NgModule(
  {
    imports: [CommonModule,
      RouterModule.forChild(AccessRoutes),
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      FlexModule,
      MatCardModule,
      MatCheckboxModule],
    declarations:[LogInComponent,
      ForgetPasswordComponent,
      ForgetPasswordValidationComponent]
  }
)
export class AccessModule {

}
