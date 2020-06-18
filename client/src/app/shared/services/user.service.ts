import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {UserInformation} from '../modles/userInformation';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = '/api/user';

  constructor(private apiService: ApiService) {
  }

  get(filter = null): Observable<UserInformation []> {
    let params = new HttpParams();
    if (filter) {
      if(filter.name) {
        params = params.append('name', filter.name || null);
      }
      if(filter.email) {
        params = params.append('email', filter.email || null);
      }
      if(filter.subRole) {
        params = params.append('subRoleId', filter.subRole.id.toString() || null);
      }
    }
    return this.apiService
      .get<UserInformation []>(this.path, null, params);
  }

  getById(id: string) {
    return this.apiService
      .get<UserInformation>(this.path + '/' + id);
  }

  updateUser(model: UserInformation) {
    return this.apiService
      .put(this.path + '/' + model.id, model);
  }

  deleteUser(id: string) {
    return this.apiService
      .delete(this.path + '/' + id);
  }
}
