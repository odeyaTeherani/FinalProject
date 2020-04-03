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

  str = this.typeOptions.map(x=>x.name);

  @Output ()typeChanged = new EventEmitter<string>();
  @Input() size = 20;
  constructor() { }

  ngOnInit() {
  }

  displayWith(event: {id: number,name: string}) {
    console.log(event);
    if (event == null) {return;}
    return event.name;
  }
}
