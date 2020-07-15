import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss']
})

export class UsersFilterComponent implements OnInit {
  filterOptions: FormGroup;
  @Output() searchUsersChanged = new EventEmitter<any>();
  @Input() mobileQuery: any;
  @Input() isNotMobile: boolean;

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      name: null,
      email: null,
      subRole: null
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.filterOptions.value);
    this.searchUsersChanged.emit(this.filterOptions.value);
  }
}
