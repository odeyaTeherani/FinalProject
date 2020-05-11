import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseEventComponent } from './close-event.component';
import {RouterModule} from '@angular/router';
import {CloseEventRoutes} from './close-event-routing';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {GooglePlacesModule} from '../shared/directives/google-places/google-places.module';
import {SeverityLevelModule} from '../shared/components/severity-level/severity-level.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CloseEventRoutes),
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    GooglePlacesModule,
    SeverityLevelModule,
    SharedModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [CloseEventComponent]
})
export class CloseEventModule { }
