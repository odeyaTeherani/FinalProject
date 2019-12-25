import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportingHistoryRoutes} from './reporting-history-routing';
import {ReportingHistoryComponent} from './reporting-history.component';

@NgModule({
  declarations:[ReportingHistoryComponent],
  imports:[CommonModule, RouterModule.forChild(ReportingHistoryRoutes)],
})

export class ReportingHistoryModule {

}
