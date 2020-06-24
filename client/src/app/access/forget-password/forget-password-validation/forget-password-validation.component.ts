import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password-validation',
  templateUrl: './forget-password-validation.component.html',
  styleUrls: ['./forget-password-validation.component.scss']
})
export class ForgetPasswordValidationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  next() {
    // checkCode
    // this.router.navigate(['/session/forgetPassword/validation/resetPassword']);
  }
}
