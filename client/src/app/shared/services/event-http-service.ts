import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Event, SeverityLevel} from '../modles/event';


@Injectable({
  providedIn: 'root'
})
export class EventHttpService {
  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event []> {
    return this.http.get<{ message: string, data: any [] }>(
      'https://david-hodia-api.herokuapp.com/events')
      .pipe(map(response => response.data.map(x => {
        return {
          id: x.id,
          date: x.created_at,
          location: x.location,
          eventType: [x['event_type']],
          severityLevel: x['severity_level'],
          conclusions: x.notes
        };
      })));
  }

}







