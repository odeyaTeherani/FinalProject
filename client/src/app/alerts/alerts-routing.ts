import {Routes} from '@angular/router';
import {AlertsComponent} from './alerts.component';
import {CloseEventComponent} from "./close-event/close-event.component";
import {EventDetailComponent} from "../events/events-list/event-detail/event-detail.component";
import {EventsComponent} from "../events/events.component";

export const ReportRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'close',
        component: CloseEventComponent
      },
      {
        path: '',
        component: AlertsComponent
      }
    ]
  }
];
