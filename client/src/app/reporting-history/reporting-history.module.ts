import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportingHistoryRoutes} from './reporting-history-routing';
import {ReportingHistoryComponent} from './reporting-history.component';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatTooltipModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations:[ReportingHistoryComponent],
  imports: [CommonModule, RouterModule.forChild(ReportingHistoryRoutes), MatExpansionModule, FlexModule, MatButtonModule, MatListModule, MatCardModule, MatIconModule, MatTooltipModule],
})

export class ReportingHistoryModule {

}
