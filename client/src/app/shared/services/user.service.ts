import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {UserInformation} from '../modles/userInformation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = '/api/user';

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<UserInformation []> {
    return this.apiService
      .get<UserInformation []>(this.path);
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
