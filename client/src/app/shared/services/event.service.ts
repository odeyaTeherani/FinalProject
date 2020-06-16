import {Injectable} from '@angular/core';
import {Event} from '../modles/event';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    path = '/api/event';

    constructor(private api: ApiService) {}

    get(filter = null): Observable<Event []> {
        let params = new HttpParams();
        if (filter) {
            if(filter.date)
                params = params.append('date', filter.date || null);
            if(filter.eventType)
                params = params.append('eventTypeId', filter.eventType.id.toString() || null);
            if(filter.severityLevel)
                 params = params.append('severityLevel', filter.severityLevel.toString() || null);
        }
        return this.api
            .get<Event []>(this.path, null, params);
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
