import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Report} from '../modles/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  path = '/api/report';

  constructor(private api:ApiService) {}

  get(): Observable<Report []> {
    return this.api
      .get<Report []>(this.path);
  }

  getById(alertId: number) {
    return this.api
      .get<Report >(this.path + '/' + alertId);
  }

  add(newReport: any) {
    return this.api
      .post<Report []>(this.path, newReport);
  }


  delete(alertId: number) {
    return this.api
      .delete(this.path + '/' + alertId);
  }

  edit(editedEntity: any) {
    return this.api
      .put(this.path + '/' + editedEntity.id, editedEntity);
  }
}







