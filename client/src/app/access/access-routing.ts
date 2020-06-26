import {Routes} from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

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
        path: 'resetPassword',
        component: ResetPasswordComponent
      }
    ]
  }
];
