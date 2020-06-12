import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventType} from '../../modles/event-type';
import {EventTypeService} from '../../services/event-type.service';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.scss']
})
export class EventTypeComponent implements OnInit {

  typeOptions: EventType [];

  @Output() typeChanged = new EventEmitter<any>();
  @Input() size = 20;
  @Input() disabled = false;
  @Input() defaultValue?: { id: number, name: string };
  @Input() appearance;

  constructor(private eventTypeService: EventTypeService) {
  }

  ngOnInit() {
    this.eventTypeService.getAll()
      .subscribe(
        (eventType: any) => {
          this.typeOptions = eventType;
        },
        error => {
          console.log(error);
        }
      );

  }

  displayWith(event: { id: number, name: string }) {
    if (event == null) {
      return;
    }
    return event.name;
  }
}
