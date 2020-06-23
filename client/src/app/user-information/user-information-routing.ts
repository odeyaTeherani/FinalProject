import {Routes} from '@angular/router';
import {AboutTheAppComponent} from './setting/about-the-app/about-the-app.component';
import {NotificationsComponent} from './setting/notifications/notifications.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {MySettingsComponent} from './setting/my-settings.component';
import {DetailsComponent} from './details/details.component';

export const  UserInformationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'settings/notifications',
        component: NotificationsComponent
      },
      {
        path: 'settings/aboutTheApp',
        component: AboutTheAppComponent,
      },
      {
        path: 'settings',
        component: MySettingsComponent,
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: '',
        component: DetailsComponent
      }
    ]
  }
];
