import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInformation} from '../../shared/modles/userInformation';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userForm: FormGroup;
  user: UserInformation;
  constructor(private fb: FormBuilder, private userService: UserService) {
      this.initForm();
  }

  private initForm() {
    const data: any = this.user == null ? {} : this.user;
    this.userForm = this.fb.group({
      userName: [data.userName || null, Validators.required],
      firstName: [data.firstName || null, Validators.required],
      lastName: [data.lastName || null, Validators.required],
      email: [data.email || null, Validators.required],
      phoneNumber: [data.phoneNumber || null, Validators.required],
      carNumber: [data.carNumber || null],
      birthDate: [data.birthDate || null]
    });
  }

  ngOnInit() {
  }

  save() {
    const user = this.userForm.value;
    this.userService.updateUser(user);
  }
}
