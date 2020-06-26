import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../shared/services/account.service';
import {LoginUser} from '../../shared/modles/loginUser';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
// import {CookieService} from 'angular2-cookie/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public rememberMe = false;
  userLogin:LoginUser = {username:'',password:''};
  hide = true;
  constructor(public accountService:AccountService) {
    // if(cookieService.get('remember')!==undefined) {
    //   if(cookieService.get('remember')==='Yes') {
    //     this.userLogin.username = this.cookieService.get('username');
    //     this.userLogin.password = this.cookieService.get('password');
    //     this.rememberMe=true;
    //   }
    //
    // }

  }

  userNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

}
