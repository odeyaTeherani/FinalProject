import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {EventType} from '../modles/event-type';
import {HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EventTypeService {
    path = '/api/eventType';

    constructor(private api: ApiService) {
    }

    get(): Observable<EventType []> {
        return this.api
            .get<EventType []>(this.path);
    }

    getById(id: number) {
        return this.api.get<EventType>(this.path + '/' + id);
    }

    add(newEventType: any) {
        let params = new HttpParams();
        params = params.append('newEventType', newEventType);
        return this.api
            .post(this.path, {}, params);
    }

    edit(editEventType: EventType) {
        return this.api
            .put(this.path + '/' + editEventType.id, editEventType);
    }

    delete(id: number) {
        return this.api
            .delete(this.path + '/' + id);
    }

}
