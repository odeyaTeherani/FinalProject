import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {EventService} from "../shared/services/event.service";

@Injectable()
export class EventDataService implements OnInit{

  events: EventEmitter<Event []>  = new EventEmitter<Event[]>();

  constructor(private eventService:EventService) {}

  ngOnInit() {
    this.eventService.onEventsChange.subscribe(
      (events: Event []) => {
            this.events = events;
            console.log(this.events);
    });

    this.eventService.getEvents();
  }
}
