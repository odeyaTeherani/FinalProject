import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Event, SeverityLevel} from '../modles/event';
import {Report} from '../../reporting-history/reporting-history.component';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  path = 'api/reports';

  constructor(private http: HttpClient) {
  }

  get(): Observable<Report []> {
    return this.http
      .get<Report []>(this.path);

  }

  add(newReport: any) {
    return this.http
      .post(this.path, newReport);
  }

  getById(alertId: any) {
    return this.http
      .get<Report>(this.path + '/' + alertId);
  }

  delete(alertId: number) {
    return this.http
      .delete(this.path + '/' + alertId);
  }

  edit(editedEntity:any) {
    return this.http
      .put(this.path + '/' + editedEntity.id, editedEntity);
  }
}






