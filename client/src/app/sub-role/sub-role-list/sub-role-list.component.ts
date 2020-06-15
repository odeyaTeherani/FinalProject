import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SubRole} from '../../shared/modles/sub-role';
import {SubRoleService} from '../../shared/services/sub-role.service';

@Component({
  selector: 'app-sub-role-list',
  templateUrl: './sub-role-list.component.html',
  styleUrls: ['./sub-role-list.component.scss']
})
export class SubRoleListComponent implements OnInit {
  subRoles: SubRole[];
  addMode = false;
  newSubRoleCtrl: FormControl;

  constructor(private subRoleService: SubRoleService) {
    this.newSubRoleCtrl = new FormControl(null, Validators.required);
  }

  ngOnInit() {
    this.subRoleService.get()
      .subscribe(
        (e: SubRole[]) => {
          this.subRoles = e;
        },
        error => {
          console.log(error);
        });
  }

  addNewSubRole() {
    console.log(this.newSubRoleCtrl.value);
    this.subRoleService.add(this.newSubRoleCtrl.value)
      .subscribe(
      (newSubRole: SubRole) => {
        console.log(newSubRole);
        this.addMode = false;
        this.subRoles.unshift(newSubRole); // push to first
      },
      error => {
        console.log(error);
      }
    );
  }

  onDeleteSucceed(id: number) {
    this.subRoles.splice(this.subRoles.indexOf(this.subRoles.find(x => x.id === id)), 1);
  }
}


