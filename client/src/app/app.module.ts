import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReportComponent } from './report/report.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './shared/components/components.component';
import { ServicesComponent } from './shared/services/services.component';
import { EventsComponent } from './events/events.component';
import { EventsFilterComponent } from './events/events-filter/events-filter.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ReportComponent,
    SharedComponent,
    ComponentsComponent,
    ServicesComponent,
    EventsComponent,
    EventsFilterComponent,
    EventsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
