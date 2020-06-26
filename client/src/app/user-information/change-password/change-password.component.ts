import {Component, OnInit} from '@angular/core';
import {ChangePassword} from '../../shared/modles/change-password';
import {AccountService} from '../../shared/services/account.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordDetails: ChangePassword = {
    confirmNewPassword: '',
    currentPassword: '',
    newPassword: ''
  };
  hide = true;

  constructor(private accountService: AccountService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  submit() {
    this.accountService.changePassword(this.changePasswordDetails)
      .subscribe(
        () => {
          this.snackBar.open('password change successfully', 'Success', {duration: 4000});
          console.log('success');
        },
        error => {
          this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
          console.log(error);
        });
  }
}
