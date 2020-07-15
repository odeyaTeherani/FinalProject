import {Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';

export interface MenuItem {
  icon: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnDestroy {
  isOpened: boolean;
  mobileQuery: MediaQueryList;
  appName: string;
  isAdminOrDeveloper: boolean;

  filterNavMenu: MenuItem[] = [
    {
      icon: 'person',
      name: 'My Profile',
      url: 'details',
    },
    {
      icon: 'vpn_key',
      name: 'Change Password',
      url: 'changePassword',
    },
    {
      icon: 'settings',
      name: 'Settings',
      url: 'settings',
    }
  ];

  fillerNavForAdmin: MenuItem [] = [
    {
      icon: 'event',
      name: 'Events',
      url: 'events',
    },
    {
      icon: 'create',
      name: 'Report Page',
      url: 'alert-page',
    },
    {
      icon: 'report',
      name: 'Alerts',
      url: 'reports',
    },
    {
      icon: 'history',
      name: 'Reporting History',
      url: 'reportingHistory',
    },
    {
      icon: 'assistant',
      name: 'Consult',
      url: 'consult',
    },
    {
      icon: 'people_alt',
      name: 'Users',
      url: 'users',
    },
    {
      icon: 'engineering',
      name: 'System Values',
      url: 'system-values',
    }
  ];
  fillerNavForUser: MenuItem [] = [
    {
      icon: 'create',
      name: 'Report Page',
      url: 'alert-page',
    },
    {
      icon: 'history',
      name: 'Reporting History',
      url: 'reportingHistory',
    }
  ];

  private readonly mobileQueryListener: () => void;

  constructor(media: MediaMatcher, public accountService:AccountService, private authService: AuthService) {
    this.appName = 'UNIFY';
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isAdminOrDeveloper = authService.isAdminOrDeveloper();
    this.mobileQueryListener = () => {
      this.isOpened = !this.mobileQuery.matches;
    };

    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  closeOnMobile(sidenav:MatSidenav) {
    if(this.mobileQuery.matches) {
      sidenav.close();
    }
  }
}

