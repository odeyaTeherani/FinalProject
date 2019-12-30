import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {AlertsComponent} from './alerts/alerts.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then(mod => mod.EventsModule)
      },
      {
        path: 'reports',
        loadChildren:() => import('./alerts/alerts.module').then(mod => mod.AlertsModule)
      },
      {
        path: 'alerts-page',
        loadChildren:() => import('./report-page/report-page.module').then(mod => mod.ReportPageModule)
      },
      {
        path: 'reportingHistory',
        loadChildren:() => import('./reporting-history/reporting-history.module').then(mod => mod.ReportingHistoryModule)
      },
      {
        path: 'logIn',
        loadChildren:() => import('./access/access.module').then(mod => mod.AccessModule)
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
