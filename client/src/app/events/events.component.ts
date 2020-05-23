import {Component, OnDestroy, OnInit} from '@angular/core';
import {Event} from '../shared/modles/event';
import {EventService} from '../shared/services/event.service';

// Special Date import

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  events: Event [];
  // subscription: Subscription;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {

    // this.subscription = this.eventService.onEventsChange.subscribe(
    //   (events: Event []) => {
    //         this.events = events;
    //         console.log(this.events);
    // });

    // this.eventService.getEvents();

    this.eventService.get()
      .subscribe((data:any) => {
        console.log(data);
        this.events = data;
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
