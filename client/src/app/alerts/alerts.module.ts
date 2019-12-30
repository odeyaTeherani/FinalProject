import {NgModule} from '@angular/core';
import {AlertsComponent} from './alerts.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportRoutes} from './alerts-routing';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule, MatIconModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule, MatSidenavModule, MatTooltipModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';


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
          MatButtonModule, MatIconModule, MatTooltipModule, FlexModule, MatSidenavModule],
    declarations:[AlertsComponent]
  }
  )
export class AlertsModule {

}
