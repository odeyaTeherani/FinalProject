import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../shared/modles/event';
import {SeverityLevel} from '../../shared/modles/severity-level.enum';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Input() event: Event;
  slRef = SeverityLevel;// referent from the event.ts instead the number its shows the severity
  constructor() {}

  ngOnInit() {
  }

  getEventTypeColor(eventType: SeverityLevel) {// method that change the color of the severity by switch case
    let res;
    switch (eventType) {
      case SeverityLevel.VeryLow:
        res = '#02fa59';
        break;
      case SeverityLevel.Low:
        res = '#faee02';
        break;
      case SeverityLevel.Medium:
        res = '#4802fa';
        break;
      case SeverityLevel.Hard:
        res = '#fa1b02';
        break;
      case SeverityLevel.VeryHard:
        res = '#000000';
        break;
    }
    return res;
  }
}
