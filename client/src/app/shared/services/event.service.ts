import {EventEmitter, Injectable} from '@angular/core';
import * as moment from 'moment';
import {SeverityLevel} from '../../events/event';
import {Event} from '../../events/event';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class EventService {

  events: Event[] ;

    /*[// event initiation 5 events in the array to show couple examples of event components on the screen(main)
    {
      id:1,
      date: moment().add(1,'days').toDate(),
      location: 'tel aviv',
      eventType: ['tsunami'],
      severityLevel: SeverityLevel.veryEasy,
      conclusions: 'sytwsg'
    },
    {
      id:2,
      date: moment().add(5,'days').toDate(),
      location: 'tel aviv',
      eventType: ['tsunami'],
      severityLevel: SeverityLevel.medium,
      conclusions: 'xlaoninxoienxcienc'
    },
    {
      id:3,
      date: moment().add(2,'days').toDate(),
      location: 'Jerusalem',
      eventType: ['boom'],
      severityLevel: SeverityLevel.hard,
      conclusions: 'Fuck off'
    },
    {
      id:4,
      date: moment().add(1,'month').toDate(),
      location: 'Arce',
      eventType: ['collapsed building'],
      severityLevel: SeverityLevel.easy,
      conclusions: 'so hot in there or here'
    },
    {
      id:5,
      date: moment().add(1,'year').toDate(),
      location: 'Jericho',
      eventType: ['fire'],
      severityLevel: SeverityLevel.veryHard,
      conclusions: 'was vary easy'
    }
  ];*/

  onEventsChange: EventEmitter<Event []> = new EventEmitter<Event []>();
  // onEventsChange: BehaviorSubject<Event []> = new BehaviorSubject<Event []>([]);

  getEvent(id: number) {

  }

  getEvents() {
    this.onEventsChange.emit(this.events);
  }
}
