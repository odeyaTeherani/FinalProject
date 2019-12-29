import { Component, OnInit } from '@angular/core';
import {Report} from '../reporting-history/reporting-history.component';
import {ReportService} from '../shared/services/report-service';

@Component({
  selector: 'app-report',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  reports: Report [];

/*  constructor() {
    this.reports = [
      {date: new Date(), id: 1, eventType: ['fire']},
      {date: new Date(), id: 12, eventType: ['fire']},
      {date: new Date(), id: 13, eventType: ['fire']},
      {date: new Date(), id: 14, eventType: ['fire']}
    ];
  }*/
  constructor(private reportService: ReportService) {
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

  buttonClicked(event: MouseEvent) {
    alert(event.clientX);
  }
}
