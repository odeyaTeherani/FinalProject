import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from './user';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
  hide = true;
  constructor(private userService:UserService) { }
  userLogin:User = {username:'',password:''};

  userNameFormControl = new FormControl('', [
    Validators.required,
    // Validators.userName,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    // Validators.userName,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

}
