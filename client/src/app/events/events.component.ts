import {Component, OnInit} from '@angular/core';
import {SeverityLevel} from './event';
import {Event} from './event';
import * as moment from 'moment';// Special Date import

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event [];

  constructor() {
    this.events = [// event initiation 5 events in the array to show couple examples of event components on the screen(main)
      {
        date: moment().add(1,'days').toDate(),
        location: 'tel aviv',
        eventType: ['tsunami'],
        severityLevel: SeverityLevel.medium,
        conclusions: 'sytwsg'
      },
      {
        date: moment().add(5,'days').toDate(),
        location: 'tel aviv',
        eventType: ['tsunami'],
        severityLevel: SeverityLevel.medium,
        conclusions: 'xlaoninxoienxcienc'
      },
      {
        date: moment().add(2,'days').toDate(),
        location: 'Jerusalem',
        eventType: ['boom'],
        severityLevel: SeverityLevel.hard,
        conclusions: 'Fuck off'
      },
      {
        date: moment().add(1,'month').toDate(),
        location: 'Arce',
        eventType: ['collapsed building'],
        severityLevel: SeverityLevel.easy,
        conclusions: 'so hot in there or here'
      },
      {
        date: moment().add(1,'year').toDate(),
        location: 'Jericho',
        eventType: ['fire'],
        severityLevel: SeverityLevel.veryHard,
        conclusions: 'was vary easy'
      }
    ];
  }

  ngOnInit() {
  }

}
