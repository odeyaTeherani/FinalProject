import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInformation} from '../shared/modles/userInformation';
import {MediaMatcher} from '@angular/cdk/layout';
import {UserService} from '../shared/services/user.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AccountService} from '../shared/services/account.service';
import {ConfirmDialogComponent} from '../shared/components/confirm-dialog/confirm-dialog.component';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  isNotMobile: boolean;
  mobileQuery: MediaQueryList;
  users: UserInformation [];
  currentUserId: string;
  private readonly mobileQueryListener: () => void;
  spinner = false;

  constructor(media: MediaMatcher, private userService: UserService,
              private dialog: MatDialog,
              private account: AccountService,
              private authService: AuthService,
              private snackBar:MatSnackBar) {
    account.getCurrentUser()
      .subscribe(
        (user) => {
          this.currentUserId = user.id;
        },
        error => {
          console.log(error);
        });

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => {
      this.isNotMobile = !this.mobileQuery.matches;
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  searchUsersChanged(filter: any) {
    this.loadUsers(filter);
  }

  loadUsers(filter = null) {
    this.spinner = true;
    this.userService.get(filter)
      .subscribe(
        (users: UserInformation[]) => {
          this.spinner = false;
          this.users = users.filter(x => x.id !== this.currentUserId);
          this.users = this.users.filter(x => x.role !== 'developer');
          if( this.authService.isAdmin()) {
            this.users = this.users.filter(x => x.role !== 'admin');
          }
        },
        () => {
          this.spinner = false;
          this.snackBar.open('Load users Fail', 'FAIL', {duration: 4000});
        });
  }

  ngOnInit() {
    this.loadUsers();
  }

  hasSelectedUser() {
    if (!this.users) {
      return false;
    }
    return this.users.map(user => user.selected)
      .reduce((accumulator, currentValue) => accumulator || currentValue, 0);
  }

  ngOnDestroy(): void {
    if (this.mobileQueryListener) {
      this.mobileQuery.removeListener(this.mobileQueryListener);
    }
  }

  deleteUsers() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      autoFocus: false,
      hasBackdrop: false,
      data: {text: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinner = true;
        const idsToDelete = this.users.filter(x => x.selected).map(x => x.id);
        console.log(idsToDelete);
        idsToDelete.forEach((idToDelete, index) => {
          this.userService.deleteUser(idToDelete)
            .subscribe(
              () => {
                this.spinner = false;
                if (index === idsToDelete.length - 1) {
                  this.loadUsers();
                }
              },
              error => {
                this.spinner = false;
                this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
              }
            );
        });
      }
    });

  }
}
