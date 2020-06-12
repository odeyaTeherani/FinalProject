import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserInformation} from '../../shared/modles/userInformation';
import {AccountService} from '../../shared/services/account.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  paramId: string = null;
  image = null;
  user: UserInformation = {
    image: '',
    userName: '',
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    carNumber: '',
    birthDate: null
  };

  constructor(private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private accountService: AccountService,
              private userService: UserService) {

  // private initForm() {
  //   const data: any = this.user == null ? {} : this.user;
  //   this.userForm = this.fb.group({
  //     userName: [data.userName || null, Validators.required],
  //     firstName: [data.firstName || null, Validators.required],
  //     lastName: [data.lastName || null, Validators.required],
  //     email: [data.email || null, Validators.required],
  //     phoneNumber: [data.phoneNumber || null, Validators.required],
  //     carNumber: [data.carNumber || null],
  //     birthDate: [data.birthDate || null]
  //   });
  // }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.paramId = params.id;
        if (this.paramId != null) {
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
      );
  }

  save() {
    this.user.image = this.image;
    this.user.role = 'admin';
    console.log(this.user);
    this.userService.updateUser(this.user)
      .subscribe(
        e => {
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  onFileSelected(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e: any) => {
      this.image = e.target.result ;
    };
  }
}
