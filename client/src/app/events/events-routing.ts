import {Routes} from '@angular/router';
import {EventsComponent} from './events.component';
import {EventDetailComponent} from './events-list/event-detail/event-detail.component';


export const EventsRouts: Routes = [
  {
    path: '',
    children: [
      {
        path: 'event-detail/:id',
        component: EventDetailComponent
      },
      {
        path: '',
        component: EventsComponent
      }
    ]
  }
];


