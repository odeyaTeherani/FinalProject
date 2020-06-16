import {Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {DetailsComponent} from './details/details.component';

export const UsersRoutes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent
  },

  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path:'',
    component: UsersComponent
  }
];
