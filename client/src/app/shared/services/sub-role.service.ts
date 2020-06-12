import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {SubRole} from '../modles/sub-role';
import {Event} from '../modles/event';

@Injectable({
  providedIn: 'root'
})
export class SubRoleService {
  path = '/api/subRole';
  constructor(private api:ApiService) {}

  get(): Observable<SubRole []> {
    return this.api
      .get<SubRole []>(this.path);
  }

  add(newSubRole: any) {
    return this.api
      .post(this.path, newSubRole);
  }

  getById(subRoleId: number) {
    return this.api
      .get<SubRole>(this.path + '/' + subRoleId);
  }

  delete(subRoleId: number) {
    return this.api
      .delete(this.path + '/' + subRoleId);
  }

  put(editedEntity: any) {
    return this.api
      .put(this.path + '/' + editedEntity.id, editedEntity);
  }

}
