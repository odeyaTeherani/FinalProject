import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportPageComponent} from './report-page.component';
import {ReportPageRoutes} from './report-page-routing';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {GooglePlacesModule} from '../shared/directives/google-places/google-places.module';
import {SeverityLevelModule} from '../shared/components/severity-level/severity-level.module';
import {SharedModule} from '../shared/shared.module';
import {Ng2ImgMaxModule} from 'ng2-img-max';

@NgModule({
  declarations: [ReportPageComponent],
  imports: [CommonModule,
    RouterModule.forChild(ReportPageRoutes),
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule,
    GooglePlacesModule,
    SeverityLevelModule,
    MatGridListModule,
    SharedModule,
    MatCardModule,
    MatCheckboxModule,
    Ng2ImgMaxModule, MatProgressSpinnerModule]
})

export class ReportPageModule {}

