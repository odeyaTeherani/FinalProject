import {Component, Input, OnInit} from '@angular/core';
import {Event, SeverityLevel} from '../../shared/modles/event';// import the event

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Input() event: Event;
  slRef = SeverityLevel;// referent from the event.ts instead the number its shows the severity
  constructor() {

  }

  ngOnInit() {
  }

  getEventTypeColor(eventType: SeverityLevel) {// method that change the color of the severity by switch case
    let res;
    switch (eventType) {
      case SeverityLevel.easy:
        res = '#faee02';
        break;
      case SeverityLevel.medium:
        res = '#4802fa';
        break;
      case SeverityLevel.hard:
        res = '#fa1b02';
        break;
      case SeverityLevel.veryHard:
        res = '#000000';
        break;
      case SeverityLevel.veryEasy:
        res = '#02fa59';
        break;
    }
    return res;
  }
}
