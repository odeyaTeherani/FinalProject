import {Component, OnDestroy, OnInit} from '@angular/core';
import {Event} from '../shared/modles/event';
import {EventService} from '../shared/services/event.service';

// Special Date import

@Component({
  selector: 'app-events',
  templateUrl: './events-list-details.component.html',
  styleUrls: ['./events-list-details.component.scss']
})
export class EventsListDetailsComponent implements OnInit {
  events: Event [];
  // subscription: Subscription;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.GetEvents();
  }

  searchChanged(filter: any) {
    this.GetEvents(filter);
  }

  private GetEvents(filter = null) {
    this.eventService.get(filter)
        .subscribe((data: any) => {
          this.events = data;
          console.log(this.events);
        });
  }
}
