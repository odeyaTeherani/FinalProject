import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import {ReportsDataService} from '../reports-data.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Report} from '../../shared/modles/report';


@Component({
  selector: 'app-report',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent implements OnInit, OnDestroy {
  isNotMobile: boolean;
  mobileQuery: MediaQueryList;
  alerts: Report [];
  alertsSubscription: Subscription;
  private readonly mobileQueryListener: () => void;
  spinner = true;

  constructor(media: MediaMatcher, private reportsDataService: ReportsDataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => {
      this.isNotMobile = !this.mobileQuery.matches;
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.alertsSubscription = this.reportsDataService
      .onEventsChange
      .subscribe((alerts: Report []) => {
        this.spinner = false;
        this.alerts = alerts;
      });

    this.reportsDataService.getReportsFromServer();
  }

  ngOnDestroy() {
    if (this.alertsSubscription) {
      this.alertsSubscription.unsubscribe();
    }

    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
