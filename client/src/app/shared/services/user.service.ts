import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../access/log-in/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersDb: User[] = [{username: 'Odeya', password: '1111'}, {username: 'David', password: '2222'}];
  user;

  constructor(private route: Router) {
    this.user = {
      token: 'abc!@#123$$%^'
    };
  }

  login(userCredentials: User) {
    const result = this.usersDb.find((user) => {
      return user.username.toLowerCase() === userCredentials.username.toLowerCase() &&
        user.password === userCredentials.password;
    });
    if (result != null) {
      localStorage.setItem('token', this.user.token);
      this.route.navigate(['/home']);
    } else {
      console.log('bad user request');
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/sessions/signIn']);
  }

}
