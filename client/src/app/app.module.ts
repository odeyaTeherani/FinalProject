import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReportComponent } from './report/report.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './shared/components/components.component';
import { ServicesComponent } from './shared/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ReportComponent,
    SharedComponent,
    ComponentsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
