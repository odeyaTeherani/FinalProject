import { Component, OnInit } from '@angular/core';
import {MatIcon, MatSidenav} from '@angular/material';

export interface MenuItem {
  subName: string;
  icon: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-my-setting',
  templateUrl: './my-settings.component.html',
  styleUrls: ['./my-settings.component.scss']
})
export class MySettingsComponent implements OnInit {

  fillerNav: MenuItem [] = [
    {
      icon: 'account_circle',
      name: 'My details',
      subName: 'Define you\'r details',
      url: 'details',
    },
    {
      icon: 'notification_important',
      name: 'Notifications',
      subName: 'What will interest you? Set the topics for alert',
      url: 'notifications',
    },
    {
      icon: 'error_outline',
      name: 'Policies, Terms of Use',
      subName: 'Terms of Use',
      url: 'aboutTheApp',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
