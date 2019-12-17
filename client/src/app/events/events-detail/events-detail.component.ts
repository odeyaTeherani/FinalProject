import {Component, Input, OnInit} from '@angular/core';
import {Event, SeverityLevel} from '../event';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit {
  @Input() event: Event;
  slRef = SeverityLevel;
  constructor() {

  }

  ngOnInit() {
  }

  getEventTypeColor(eventType: SeverityLevel) {
    let res;
    switch (eventType) {
      case SeverityLevel.easy:
        res = '#4802fa';
        break;
      case SeverityLevel.medium:
        res = '#faee02';
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
