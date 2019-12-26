import {Component, OnInit} from '@angular/core';


export interface Report {
  id: number;
  date: Date;
  eventType: string[];

}

@Component({
  selector: 'app-user-reporting-history',
  templateUrl: './reporting-history.component.html',
  styleUrls: ['./reporting-history.component.scss']
})
export class ReportingHistoryComponent implements OnInit {
  reports: Report [];

  constructor() {
    this.reports = [
      {date:new Date(),id:1, eventType:['fire']},
      {date:new Date(),id:12, eventType:['fire']},
      {date:new Date(),id:13, eventType:['fire']},
      {date:new Date(),id:14, eventType:['fire']}
    ];
  }

  ngOnInit() {
  }

}
