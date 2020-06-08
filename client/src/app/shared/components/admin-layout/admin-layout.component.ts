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
  isAdmin: boolean;

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

  constructor(media: MediaMatcher, public userService:AccountService, private authService: AuthService) {
    this.appName = 'system';
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isAdmin = authService.isAdmin();
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

