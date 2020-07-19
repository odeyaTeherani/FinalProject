import {Component, OnInit} from '@angular/core';
import {Event} from '../shared/modles/event';
import {EventService} from '../shared/services/event.service';
import {MatSnackBar} from '@angular/material';

// Special Date import

@Component({
  selector: 'app-events',
  templateUrl: './events-list-details.component.html',
  styleUrls: ['./events-list-details.component.scss']
})
export class EventsListDetailsComponent implements OnInit {
  spinner = true;
  events: Event [];

  // subscription: Subscription;

  constructor(private eventService: EventService,
              private matSnack: MatSnackBar) {
  }

  ngOnInit() {
    this.GetEvents();
  }

  searchChanged(filter: any) {
    this.GetEvents(filter);
  }

  private GetEvents(filter = null) {
    this.eventService.get(filter)
      .subscribe(
        (data: any) => {
          this.spinner = false;
          this.events = data;
          console.log(this.events);
        },
        () => {
          this.spinner = false;
          this.matSnack.open('Load Events Fail', 'Fail', {duration:4000});
        });
  }
}
