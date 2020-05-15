import { Component, OnInit } from '@angular/core';
import {Report} from '../reporting-history/reporting-history.component';
import {ReportService} from '../shared/services/report-service';
import {formatSize} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/stats';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-report',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent implements OnInit {
  // mobileQuery: MediaQueryList;
  // isFallScreen: boolean;
  reports: Report [];

/*  constructor() {
    this.reports = [
      {date: new Date(), id: 1, eventType: ['fire']},
      {date: new Date(), id: 12, eventType: ['fire']},
      {date: new Date(), id: 13, eventType: ['fire']},
      {date: new Date(), id: 14, eventType: ['fire']}
    ];
  }*/
  private readonly mobileQueryListener: () => void;

  constructor(media: MediaMatcher, private reportService: ReportService) {
    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this.mobileQueryListener = () => {
    //   this.isFallScreen = !this.mobileQuery.matches;
    // };

    reportService.get()
      .subscribe(
        (reports) => {
          this.reports = reports;
          console.log('Back from server - ', reports);
        },
        (error) => {
          console.log(error);
        });
  }
  ngOnInit() {
  }

  closeEvent(event: MouseEvent) {
    alert('They Press On Me');
  }
}
