import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Report} from '../../reporting-history/reporting-history.component';
import {environment} from '../../../environments/environment';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  path = '/api/report';

  constructor(private http: HttpClient,private api:ApiService) {}

  get(): Observable<Report []> {
    return this.api
      .get<Report []>(this.path);
      // .pipe(map(
      //   (alert: Report []) => {
      //     alert.forEach(
      //       (report:any) => report.eventType = report.eventType.map(eventType => eventType.name).join()
      //     );
      //     return alert;
      //   }));
  }

  add(newReport: any) {
    return this.http
      .post(environment.url +  this.path, newReport);
  }

  getById(alertId: any) {
    return this.http
      .get<Report>(environment.url + this.path + '/' + alertId);
  }

  delete(alertId: number) {
    return this.http
      .delete(this.path + '/' + alertId);
  }

  edit(editedEntity: any) {
    return this.http
      .put(this.path + '/' + editedEntity.id, editedEntity);
  }
}







