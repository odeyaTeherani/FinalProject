import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReportComponent } from './report/report.component';
import { SharedComponent } from './shared/shared.component';
import { ServicesComponent } from './shared/services/services.component';
import { EventsComponent } from './events/events.component';
import { EventsFilterComponent } from './events/events-filter/events-filter.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GooglePlacesDirective } from './shared/directives/google-places.directive';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ReportComponent,
    SharedComponent,
    ServicesComponent,
    EventsComponent,
    EventsFilterComponent,
    EventsDetailComponent,
    GooglePlacesDirective,
    AdminLayoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
