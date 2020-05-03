import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseEventComponent } from './close-event.component';
import {RouterModule} from '@angular/router';
import {CloseEventRoutes} from './close-event-routing';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CloseEventRoutes),
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [CloseEventComponent]
})
export class CloseEventModule { }
