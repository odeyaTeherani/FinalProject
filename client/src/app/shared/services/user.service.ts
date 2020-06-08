import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../access/log-in/user';
import {ApiService} from './api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = '/api/account'
  usersDb: User[] = [{username: 'Odeya', password: '1111'}, {username: 'David', password: '2222'}];
  user;

  constructor(private route: Router,private apiService:ApiService,private snackBar:MatSnackBar) {
    this.user = {
      token: 'abc!@#123$$%^'
    };
  }

  login(userCredentials: User) {
    this.apiService.post<any>(this.path + '/login',userCredentials)
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

}
