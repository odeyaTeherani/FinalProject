import {Component, OnInit} from '@angular/core';
import {UserInformation} from '../../shared/modles/userInformation';
import {SubRole} from '../../shared/modles/sub-role';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../shared/services/account.service';
import {UserService} from '../../shared/services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import {AuthService} from '../../shared/services/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  extraDetailsUser = false;
  isAdminEnter = false;
  paramId: string = null;
  image = null;
  user: UserInformation = {
    subRole: {name: '', id: null},
    image: '',
    userName: '',
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    selected: false,
    role: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    carNumber: '',
    birthDate: null
  };
  addMode = false;
  subRole: SubRole;
  private role: string;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private activeRoute: ActivatedRoute,
              private router: Router,
              public auth: AuthService,
              private snackBar: MatSnackBar,
              private accountService: AccountService,
              private userService: UserService) {
  }

  loadPerson() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.paramId = params.id;
        if (this.paramId === 'addUser') {
          this.addMode = true;
          this.extraDetailsUser = true;
        } else {
          if (this.paramId != null) {
            this.isAdminEnter = true;
            this.extraDetailsUser = true;
            this.getUserById();
          } else {
            this.getCurrentUser();
          }
        }
      });
  }

  ngOnInit() {
    this.loadPerson();
  }

  onFileSelected(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e: any) => {
      this.image = e.target.result;
    };
  }

  save() {
    this.user.image = this.image;
    console.log(this.user);
    this.user.subRole = this.subRole;
    if (this.addMode === true) {
      this.addUser();
    } else {
      this.updateUser();
    }
  }

  addUser() {
    if (this.auth.isAdmin()) {
      this.user.role = 'user';
    }
    this.accountService.register(this.user)
      .subscribe(() => {
          this.router.navigate(['/users']);
        },
        error => {
          this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
        });
  }

  updateUser() {
    this.userService.updateUser(this.user)
      .subscribe(
        () => {
          this.snackBar.open('Update User Successes', 'Success', {duration: 4000});
        },
        error => {
          this.snackBar.open(error.error.title, 'FAIL', {duration: 4000});
        });
  }

  getCurrentUser() {
    this.accountService.getCurrentUser()
      .subscribe(
        (user: UserInformation) => {
          this.user = user;
          this.subRole = user.subRole;
          this.image = user.image;
          this.user.role = this.getRole();
          console.log('CurrentUser: ');
          console.log(this.user);
        },
        error => {
          console.log(error);
        });
  }

  getUserById() {
    this.userService.getById(this.paramId)
      .subscribe(
        (user: UserInformation) => {
          this.user = user;
          this.subRole = user.subRole;
          this.image = user.image;
          this.isAdminEnter = true;
        },
        error => {
          console.log(error);
        });
  }

  deleteUser() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {text: this.user.firstName + ' ' + this.user.lastName }
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.userService.deleteUser(this.paramId)
            .subscribe(
              () => {
                this.router.navigate(['/users']);
              },
              error => {
                this.snackBar.open('Delete user fail', 'FAIL', {duration: 4000});
              });
        }
      });
  }

  getRole() {
    if (this.auth.isAdmin()) {
      this.role = 'admin';
    } else if (this.auth.isDeveloper()) {
      this.role = 'developer';
    } else {
      this.role = 'user';
    }
    return this.role;
  }

}

