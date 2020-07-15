import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginUser} from '../modles/loginUser';
import {ApiService} from './api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserInformation} from '../modles/userInformation';
import {ChangePassword} from '../modles/change-password';
import {ResetPassword} from '../modles/reset-password';
import {ForgotPassword} from '../modles/forgot-password';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  path = '/api/account';
  user;

  constructor(private route: Router,
              private apiService: ApiService,
              private snackBar: MatSnackBar) {
    this.user = {
      token: 'abc!@#123$$%^'
    };
  }

  register(user: UserInformation) {
    return this.apiService
      .post(this.path + '/register', user);
  }

  login(userCredentials: LoginUser) {
    this.apiService.post<any>(this.path + '/login', userCredentials)
      .subscribe(
        (result: any) => {
          if (result != null) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('role', result.roles[0]);
            console.log(result.roles[0]);
            console.log(result.token);
            if (result.roles[0] === 'user') {
              this.route.navigate(['/alert-page']);
            } else {
              this.route.navigate(['/reports']);
            }
          } else {
            console.log('bad user request');
          }
        }, (error) => {
          console.log(error);
          this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
        });
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/sessions/signIn']);
  }

  updateCurrentUser(updateUser: UserInformation) {
    return this.apiService
      .put(this.path + '/updateCurrentUser', updateUser);
  }

  getCurrentUser() {
    return this.apiService
      .get<UserInformation>(this.path + '/getCurrentUser');
  }

  changePassword(change: ChangePassword) {
    return this.apiService
      .put(this.path + '/changePassword', change);
  }

  resetPassword(reset: ResetPassword) {
    return this.apiService
      .put(this.path + '/resetPassword', reset);
  }

  forgotPassword(model: ForgotPassword) {
    return this.apiService
      .post(this.path + '/forgotPassword', model);
  }

  deleteCurrentUser() {
    return this.apiService
      .delete(this.path + '/deleteCurrentAccount');
  }
}
