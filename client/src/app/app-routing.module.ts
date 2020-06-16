import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {SessionsLayoutComponent} from './shared/components/sessions-layout/sessions-layout.component';
import {AuthGuard} from './shared/services/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        canActivateChild: [AuthGuard],
        path: 'events',
        loadChildren: () => import('./events/events.module').then(mod => mod.EventsModule)
      },
      {
        canActivateChild: [AuthGuard],
        path: 'system-values',
        loadChildren: () => import('./system-values/system-values.module').then(mod => mod.SystemValuesModule)
      },
      {
      //   canActivateChild: [AuthGuard],
      //   path: 'closeEvent',
      //   loadChildren: () => import('./close-event/close-event.module').then(mod => mod.CloseEventModule)
      // },
      // {
        path: 'mySettings',
        loadChildren: () => import('./setting/settings.module').then(mod => mod.SettingsModule)
      },
      {
        canActivateChild: [AuthGuard],
        path: 'consult',
        loadChildren: () => import('./consult/consult.module').then(mod => mod.ConsultModule)
      },
      {
        canActivateChild: [AuthGuard],
        path: 'reports',
        loadChildren:() => import('./alerts/alerts.module').then(mod => mod.AlertsModule)
      },
      {
        canActivateChild: [AuthGuard],
        path: 'users',
        loadChildren:() => import('./users/users.module').then(mod => mod.UsersModule)
      },
      {
        path: 'alert-page',
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
