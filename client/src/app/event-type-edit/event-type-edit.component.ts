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
  editType: EventType;
  editMode = false;
  addMode = false;

  constructor(private eventTypeService: EventTypeService) {}

  ngOnInit() {
    this.eventTypeService.getAll()
      .subscribe(
        (e: EventType[]) => {
          this.eventsType = e;
        });
  }

  addNewEventType(obj: any) {
    this.eventTypeService.add(this.newEventType).subscribe(
      e => {
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }

  editEventType(id: number) {
    console.log(id);
    this.editMode = false;
    this.eventTypeService.getById(id)
      .subscribe(
        e => {
          this.editType = e;
          console.log(this.editType);
        },
        error => {
          console.log(error);
        }
      );
    console.log(this.editType);
    // this.eventTypeService.edit(this.editType);
  }

  deleteEventType(deleted: EventType) {
    console.log(deleted);
    this.eventTypeService.delete(deleted)
      .subscribe(
        e => {
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }
}
