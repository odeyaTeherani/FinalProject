import {Routes} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AboutTheAppComponent } from './about-the-app/about-the-app.component';
import { MySettingsComponent } from './my-settings/my-settings.component';
import {NotificationsComponent} from './notifications/notifications.component';

export const SettingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'aboutTheApp',
        component: AboutTheAppComponent,
      },
      {
        path: '',
        component: MySettingsComponent
      }
    ]
  }
];
