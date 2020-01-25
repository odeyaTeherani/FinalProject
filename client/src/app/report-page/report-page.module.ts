import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportPageComponent} from './report-page.component';
import {ReportPageRoutes} from './report-page-routing';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ReportPageComponent],
    imports: [CommonModule,
        RouterModule.forChild(ReportPageRoutes),
        MatInputModule,
        FlexLayoutModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule, MatButtonModule, MatIconModule]
})

export class ReportPageModule {

}

