import {NgModule} from '@angular/core';
import {ReportItemComponent} from './report-item/report-item.component';
import {ReportComponent} from './report.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportRoutes} from './report-routing';
import {MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';


@NgModule(
  {
    imports: [CommonModule, RouterModule.forChild(ReportRoutes), MatFormFieldModule, MatOptionModule, MatSelectModule],
    declarations:[ReportItemComponent,ReportComponent]
  }
  )
export class ReportModule {

}
