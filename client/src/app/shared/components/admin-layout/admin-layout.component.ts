import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatIcon, MatSidenav} from '@angular/material';


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
  fillerNav: MenuItem [] = [
    {
      icon: 'event',
      name: 'Events',
      url: 'events',
    },
    {
      icon: 'create',
      name: 'Report Page',
      url: 'alerts-page',
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
    }
  ];

  private readonly mobileQueryListener: () => void;

  constructor(media: MediaMatcher) {
    this.appName = 'system';
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this.mobileQueryListener = () => {
      this.isOpened = !this.mobileQuery.matches;
    };

    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}

