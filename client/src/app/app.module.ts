import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReportComponent } from './report/report.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './shared/components/components.component';
import { ServicesComponent } from './shared/services/services.component';
import { ReportDetailComponent } from './report/report-detail/report-detail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ReportComponent,
    SharedComponent,
    ComponentsComponent,
    ServicesComponent,
    ReportDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
