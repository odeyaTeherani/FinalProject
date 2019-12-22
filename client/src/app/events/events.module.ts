import {NgModule} from '@angular/core';
import {EventsComponent} from './events.component';
import {EventsFilterComponent} from './events-filter/events-filter.component';
import {EventsListComponent} from './events-list/events-list.component';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDatepickerModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {GooglePlacesDirective} from '../shared/directives/google-places.directive';
import {RouterModule} from '@angular/router';
import {EventsRouts} from './events-routing';
import { EventDetailComponent } from './events-list/event-detail/event-detail.component';
import {EventService} from '../shared/services/event.service';


@NgModule({
  declarations:[
    EventsComponent,
    EventsFilterComponent,
    EventsListComponent,
    GooglePlacesDirective,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule.forChild(EventsRouts)
  ],
  providers:[],
  entryComponents:[],
  exports:[EventsComponent]
})
export class EventsModule {
    constructor() {
      console.log('events module loaded');
    }
}
