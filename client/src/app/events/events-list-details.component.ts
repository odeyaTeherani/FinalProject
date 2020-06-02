import {Component, OnDestroy, OnInit} from '@angular/core';
import {Event} from '../shared/modles/event';
import {EventService} from '../shared/services/event.service';

// Special Date import

@Component({
  selector: 'app-events',
  templateUrl: './events-list-details.component.html',
  styleUrls: ['./events-list-details.component.scss']
})
export class EventsListDetailsComponent implements OnInit, OnDestroy {
  events: Event [];
  // subscription: Subscription;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.get()
      .subscribe((data:any) => {
        this.events = data;
        console.log('back from server: ' + this.events);
      });
  }

  searchChanged(event: any) {
    // go to server and fetch the filterd events
    console.log(event);
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
  }
}
