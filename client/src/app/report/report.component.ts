import { Component, OnInit } from '@angular/core';
import {Report} from '../reporting-history/reporting-history.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reports: Report [];

  constructor() {
    this.reports = [
      {date: new Date(), id: 1, eventType: ['fire']},
      {date: new Date(), id: 12, eventType: ['fire']},
      {date: new Date(), id: 13, eventType: ['fire']},
      {date: new Date(), id: 14, eventType: ['fire']}
    ];
  }
  ngOnInit() {
  }

  buttonClicked(event: MouseEvent) {
    alert(event.clientX);
  }
}
