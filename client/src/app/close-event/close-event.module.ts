import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseEventComponent } from './close-event.component';
import {RouterModule} from '@angular/router';
import {CloseEventRoutes} from './close-event-routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CloseEventRoutes)
  ],
  declarations: [CloseEventComponent]
})
export class CloseEventModule { }
