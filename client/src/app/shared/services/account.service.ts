import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginUser} from '../modles/loginUser';
import {ApiService} from './api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserInformation} from '../modles/userInformation';
import {Observable} from 'rxjs';
import {Report} from '../modles/report';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  path = '/api/account';
  user;

  constructor(private route: Router,private apiService:ApiService, private snackBar:MatSnackBar) {
    this.user = {
      token: 'abc!@#123$$%^'
    };
  }

  login(userCredentials: LoginUser) {
    this.apiService.post<any>(this.path +'/login' ,userCredentials)
        .subscribe(
            (result:any)=> {
              if (result != null) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('role', result.roles[0]);
                this.route.navigate(['/home']);
              } else {
                console.log('bad user request');
              }
            },(error) => {
                console.log(error);
                this.snackBar.open(error.error.title,'FAIL' ,{duration:4000});
            });
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/sessions/signIn']);
  }

  updateCurrentUser(updateUser: UserInformation) {
    return this.apiService
      .put(this.path + '/updateCurrentUser' , updateUser);
  }

  getCurrentUser() {
    return this.apiService
      .get<UserInformation>(this.path + '/getCurrentUser');
  }

  deleteCurrentUser() {
    return this.apiService
      .delete(this.path + '/deleteCurrentAccount');
  }
}