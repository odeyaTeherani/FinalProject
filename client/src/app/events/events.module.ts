import {NgModule} from '@angular/core';
import {EventsListDetailsComponent} from './events-list-details.component';
import {EventsFilterComponent} from './events-filter/events-filter.component';
import {EventsListComponent} from './events-list/events-list.component';
import {CommonModule} from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule, MatCardModule,
    MatDatepickerModule,
    MatExpansionModule, MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule, MatNativeDateModule, MatProgressSpinnerModule,
    MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EventsRouts} from './events-routing';
import {GooglePlacesModule} from '../shared/directives/google-places/google-places.module';
import {SeverityLevelModule} from '../shared/components/severity-level/severity-level.module';
import {SharedModule} from '../shared/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations:[
    EventsListDetailsComponent,
    EventsFilterComponent,
    EventsListComponent],
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
        GooglePlacesModule,
        MatNativeDateModule,
        RouterModule.forChild(EventsRouts),
        SeverityLevelModule,
        SharedModule,
        ScrollingModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
  providers:[],
  entryComponents:[],
  exports:[]
})
export class EventsModule {

}
