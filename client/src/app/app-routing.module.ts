import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {ReportComponent} from './report/report.component';
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
        loadChildren:() => import('./report/report.module').then(mod => mod.ReportModule)
      },
      {
        path: 'report-page',
        loadChildren:() => import('./report-page/report-page.module').then(mod => mod.ReportPageModule)
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

/*
const routes: Routes = [
  {

    path: 'events',
    component: EventsComponent

  }
];
*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('routes loaded');
  }
}
