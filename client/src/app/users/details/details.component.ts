import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserInformation} from '../../shared/modles/userInformation';
import {AccountService} from '../../shared/services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  extraDetailsUser = false;
  isAdmin = false;
  paramId: string = null;
  image = null;
  user: UserInformation = {
    subRole: {subRole: '', id: null},
    image: '',
    userName: '',
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    selected: false,
    role: 'user',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    carNumber: '',
    birthDate: null
  };
  addMode = false;

  constructor(private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private accountService: AccountService,
              private userService: UserService) {
  }

  loadPerson() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.paramId = params.id;
        if (this.paramId === 'addUser') {
          console.log(this.paramId);
          this.addMode = true;
          this.extraDetailsUser = true;
        } else {

          if (this.paramId != null) {
            this.extraDetailsUser = true;
            this.userService.getById(this.paramId)
              .subscribe(
                (user: UserInformation) => {
                  this.user = user;
                  this.image = user.image;
                  console.log(this.user);
                },
                error => {
                  console.log(error);
                });
          } else {
            this.accountService.getCurrentUser()
              .subscribe(
                (user: UserInformation) => {
                  this.user = user;
                  this.image = user.image;
                  console.log('CurrentUser: ');
                  console.log(this.user);
                },
                error => {
                  console.log(error);
                });
          }
        }
      });
    if (this.user.role === 'admin') {
      this.isAdmin = true;
    }
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
    this.user.role = 'user';
    if (this.addMode === true) {
      this.accountService.register(this.user);
        // .subscribe(
        //   e => {
        //     this.loadPerson();
        //   },
        //   error => {
        //     console.log(error);
        //   }
        //   );
    } else {
      this.userService.updateUser(this.user)
        .subscribe(
          e => {
            this.loadPerson();
          },
          error => {
            console.log(error);
          });
    }
  }

  deleteUser() {
    this.userService.deleteUser(this.paramId)
      .subscribe(
         userDeleted => {
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
