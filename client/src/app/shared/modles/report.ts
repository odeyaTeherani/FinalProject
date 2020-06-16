import {EventType} from './event-type';
import {SeverityLevel} from './severity-level.enum';

export interface Report {
  user: {  firstName: string, lastName: string };
  id: number;
  date: Date;
  eventType: EventType;
  carNumber: number;
  severityLevel: SeverityLevel;
  numberOfEvacuated: number;
  note: string;
  images: string [];
  selected: boolean;
  location?: { longitude:number, latitude:number };

}
