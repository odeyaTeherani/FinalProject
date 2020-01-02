import {Routes} from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';

export const AccessRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ForgetPasswordComponent
      }
    ]
  }
];
