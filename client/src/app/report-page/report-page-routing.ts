import {Routes} from '@angular/router';
import {ReportPageComponent} from './report-page.component';

export const ReportPageRoutes: Routes = [
  {
    path: ':id',
    component: ReportPageComponent
  },{
    path: '',
    component: ReportPageComponent
  }
];
