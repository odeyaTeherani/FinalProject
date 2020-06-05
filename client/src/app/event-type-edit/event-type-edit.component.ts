import {Component, OnInit} from '@angular/core';
import {EventType} from '../shared/modles/event-type';
import {EventTypeService} from '../shared/services/event-type.service';

@Component({
  selector: 'app-event-type-edit',
  templateUrl: './event-type-edit.component.html',
  styleUrls: ['./event-type-edit.component.scss']
})
export class EventTypeEditComponent implements OnInit {
  eventsType: EventType[];
  newEventType: EventType;
  constructor(private eventTypeService: EventTypeService) {}

  ngOnInit() {
    this.eventTypeService.getAll()
      .subscribe((e: any) => {
        this.eventsType = e;
      });
  }

  addNewEventType($event: MouseEvent) {
    this.newEventType.name = 'MoreFire';
    console.log(this.newEventType.name);
    this.eventTypeService.edit(this.newEventType);
  }

  EditEventType($event: MouseEvent) {}

  deleteEventType($event: MouseEvent) {}
}
