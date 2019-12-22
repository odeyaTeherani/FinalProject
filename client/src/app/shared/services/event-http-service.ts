import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class EventHttpService {
    constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event []>('/api/events');
  }
}



