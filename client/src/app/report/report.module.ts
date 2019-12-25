import {NgModule} from '@angular/core';
import {ReportItemComponent} from './report-item/report-item.component';
import {ReportComponent} from './report.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportRoutes} from './report-routing';


@NgModule(
  {
    imports:[CommonModule,RouterModule.forChild(ReportRoutes)],
    declarations:[ReportItemComponent,ReportComponent]
  }
  )
export class ReportModule {

}
