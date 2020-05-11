import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseEventComponent } from './close-event.component';
import {RouterModule} from '@angular/router';
import {CloseEventRoutes} from './close-event-routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatDatepickerModule, MatIconModule, MatInputModule} from '@angular/material';
import {GooglePlacesModule} from '../shared/directives/google-places/google-places.module';
import {SharedModule} from '../shared/shared.module';
import {SeverityLevelModule} from '../shared/components/severity-level/severity-level.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CloseEventRoutes),
    FormsModule,
    FlexModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    GooglePlacesModule,
    SharedModule,
    SeverityLevelModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [CloseEventComponent]
})
export class CloseEventModule { }
