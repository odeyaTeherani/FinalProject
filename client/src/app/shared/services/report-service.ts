import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Report} from '../../reporting-history/reporting-history.component';
import {map} from 'rxjs/operators';
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  path = '/api/report';

  constructor(private http: HttpClient) {}

  get(): Observable<Report []> {

    return this.http
      .get<Report []>(this.path)
      .pipe(map(
        (reports: Report []) => {
          reports.forEach(
            (report:any) => report.eventType = report.eventType.map(eventType => eventType.name).join()
          );
          return reports;
        }));
  }

  add(newReport: any) {
    return this.http
      .post(environment.url +  this.path, newReport);
  }

  getById(alertId: any) {
    return this.http
      .get<Report>(this.path + '/' + alertId);
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







