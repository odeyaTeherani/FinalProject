import { Injectable} from '@angular/core';
import {Event} from '../modles/event';
import { Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn:'root'
})
export class EventService {
  path = '/api/event';

  constructor(private api:ApiService) {}

  get(): Observable<Event []> {
    return this.api
      .get<Event []>(this.path);
  }

  add(newEvent: any) {
    return this.api
      .post(this.path, newEvent);
  }

  getById(eventId: number) {
    return this.api
      .get<Event>(this.path + '/' + eventId);
  }

  delete(eventId: number) {
    return this.api
      .delete(this.path + '/' + eventId);
  }

  put(editedEntity: any) {
    return this.api
      .put(this.path + '/' + editedEntity.id, editedEntity);
  }

  // onEventsChange: EventEmitter<Event []> = new EventEmitter<Event []>();
  // // onEventsChange: BehaviorSubject<Event []> = new BehaviorSubject<Event []>([]);
  //
  // getEvents() {
  //   this.onEventsChange.emit(this.events);
  // }
}
