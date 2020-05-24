import {EventEmitter, Injectable} from '@angular/core';
import {Event} from '../modles/event';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Report} from '../../reporting-history/reporting-history.component';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn:'root'
})
export class EventService {
  path = '/api/event';

  constructor(private http: HttpClient,private api:ApiService) {}

  get(): Observable<Event []> {
    return this.api
      .get<Event []>(this.path);
  }

  add(newEvent: any) {
    return this.api
      .post(this.path, newEvent);
  }

  getById(eventId: number) {
    return this.http
      .get<Event>(environment.url + this.path + '/' + eventId);
  }

  delete(eventId: number) {
    return this.http
      .delete(this.path + '/' + eventId);
  }

  edit(editedEntity: any) {
    return this.http
      .put(this.path + '/' + editedEntity.id, editedEntity);
  }

  // onEventsChange: EventEmitter<Event []> = new EventEmitter<Event []>();
  // // onEventsChange: BehaviorSubject<Event []> = new BehaviorSubject<Event []>([]);
  //
  // getEvents() {
  //   this.onEventsChange.emit(this.events);
  // }
}
