import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventType} from '../../../reporting-history/reporting-history.component';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.scss']
})
export class EventTypeComponent implements OnInit {
  // will be injected from default service contains location options list (From server)
  typeOptions: EventType [] = [{id:1,name:'Fire'}, {id:2,name:'Building collapse'} , {id:3, name:'Other'}];

  @Output ()typeChanged = new EventEmitter<any>();
  @Input() size = 20;
  constructor() { }

  ngOnInit() {
  }

  displayWith(event: {id: number,name: string}) {
    if (event == null) {return;}
    return event.name;
  }
}
