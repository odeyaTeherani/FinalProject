import {Component, OnInit} from '@angular/core';
import {ForgotPassword} from '../../shared/modles/forgot-password';
import {MatSnackBar} from '@angular/material';
import {AccountService} from '../../shared/services/account.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  model: ForgotPassword = {
    email: ''
  };

  constructor(private snackBar: MatSnackBar, private accountService: AccountService) {}

  ngOnInit() {
  }

  sendEmail() {
    console.log(this.model);
    this.accountService.forgotPassword(this.model)
      .subscribe(
        () => {
          this.snackBar.open('A link has been send to your email to reset your password',
            'Ok', {duration: 4000});
        },
        () => {
          this.snackBar.open('Sending email fail',
            'Fail', {duration: 4000});
        });
  }
}
