import {Routes} from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ForgetPasswordValidationComponent} from './forget-password/forget-password-validation/forget-password-validation.component';
import {ResetPasswordComponent} from './forget-password/forget-password-validation/reset-password/reset-password.component';

export const AccessRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signIn',
        component: LogInComponent
      },
      {
        path: 'forgetPassword',
        component: ForgetPasswordComponent,
      },
      {
        path: 'forgetPassword/validation',
        component: ForgetPasswordValidationComponent
      },
      {
        path: 'forgetPassword/validation/resetPassword',
        component: ResetPasswordComponent
      }
    ]
  }
];
