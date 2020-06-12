import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventTypeEditComponent} from './event-type-edit.component';
import {RouterModule} from '@angular/router';
import {EventTypeEditRoutes} from './event-type-edit-routing';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatTooltipModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventTypeItemComponent } from './event-type-item/event-type-item.component';



@NgModule({
  declarations: [
    EventTypeEditComponent,
    EventTypeItemComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(EventTypeEditRoutes),
        MatCardModule,
        MatListModule,
        FlexModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class EventTypeEditModule { }
