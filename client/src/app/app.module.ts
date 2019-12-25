import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReportComponent } from './report/report.component';
import { SharedComponent } from './shared/shared.component';
import { ServicesComponent } from './shared/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatAutocompleteModule,
  MatButtonModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {EventsModule} from './events/events.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ReportComponent,
    SharedComponent,
    ServicesComponent,
    AdminLayoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
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
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
