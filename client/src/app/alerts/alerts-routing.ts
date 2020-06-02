import {Routes} from '@angular/router';
import {AlertsComponent} from './alerts-list/alerts.component';
import {CloseEventComponent} from './close-event/close-event.component';

export const ReportRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'close',
        component: CloseEventComponent
      },
      {
        path: 'close/:id',
        component: CloseEventComponent
      },

      {
        path: '',
        component: AlertsComponent
      }
    ]
  }
];
