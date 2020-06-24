import {Component, OnInit} from '@angular/core';
import {ResetPassword} from '../../../../shared/modles/reset-password';
import {AccountService} from '../../../../shared/services/account.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  details: ResetPassword = {
    newPassword: '',
    token: '',
    userName: ''
  };

  constructor(private accountService: AccountService,
              private router: Router,
              private snackBar:MatSnackBar) {
  }

  ngOnInit() {
  }

  change() {
    console.log(this.details);
    this.accountService.resetPassword(this.details)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        error => {
          this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
        });
  }
}
