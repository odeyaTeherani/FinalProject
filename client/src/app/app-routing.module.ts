import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {SessionsLayoutComponent} from './shared/components/sessions-layout/sessions-layout.component';

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
        path: 'mySettings',
        loadChildren: () => import('./setting/settings.module').then(mod => mod.SettingsModule)
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/sessions/signIn',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: SessionsLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren:() => import('./access/access.module').then(mod => mod.AccessModule)
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
