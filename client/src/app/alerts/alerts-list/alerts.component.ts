import {Component, OnDestroy, OnInit} from '@angular/core';
import {Report} from '../../reporting-history/reporting-history.component';
import { Subscription} from 'rxjs';
import {ReportsDataService} from '../reports-data.service';


@Component({
  selector: 'app-report',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent implements OnInit, OnDestroy {

  alerts: Report [];
  alertsSubscription: Subscription;

  constructor(private reportsDataService: ReportsDataService) {}

  ngOnInit() {
    this.alertsSubscription = this.reportsDataService
      .onEventsChange
      .subscribe((alerts: Report []) => {
        this.alerts = alerts;
      });

    this.reportsDataService.getData();
  }

  closeEvent(event: MouseEvent) {
  }

  ngOnDestroy() {
    if (this.alertsSubscription) {
      this.alertsSubscription.unsubscribe();
    }
  }

}
