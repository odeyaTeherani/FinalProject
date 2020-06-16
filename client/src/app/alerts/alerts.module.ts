import {NgModule, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AlertsComponent} from './alerts-list/alerts.component';
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
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {CloseEventComponent} from "./close-event/close-event.component";
import {ReportsDataService} from "./reports-data.service";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {GooglePlacesModule} from "../shared/directives/google-places/google-places.module";
import {SeverityLevelModule} from "../shared/components/severity-level/severity-level.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {ScrollingModule} from '@angular/cdk/scrolling';


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
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      FlexModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      GooglePlacesModule,
      SharedModule,
      SeverityLevelModule, FlexLayoutModule, ScrollingModule],
    declarations: [
      AlertsComponent,
      CloseEventComponent
    ],
    exports: [
      AlertsComponent
    ],
    providers: [
      ReportsDataService
    ]
  }
)
export class AlertsModule{
    constructor() {
        console.log('in module constructor')
    }
}
