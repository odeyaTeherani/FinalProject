import {Routes} from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
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
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
      },
      {
        path: 'resetPassword',
        component: ResetPasswordComponent
      }
    ]
  }
];
