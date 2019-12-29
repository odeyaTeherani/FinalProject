import {NgModule} from '@angular/core';
import {AlertsComponent} from './alerts.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportRoutes} from './alerts-routing';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';


@NgModule(
  {
    imports: [CommonModule,
      RouterModule.forChild(ReportRoutes),
      MatFormFieldModule,
      MatOptionModule,
      MatSelectModule,
      MatCardModule,
      MatListModule,
      MatCheckboxModule,
      MatButtonModule],
    declarations:[AlertsComponent]
  }
  )
export class AlertsModule {

}
