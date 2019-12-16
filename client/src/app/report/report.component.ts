import {Component} from '@angular/core';
import {Report} from '../Models/Report';
import {ReportService} from '../services/report.service';
import {ReportHttpService} from '../services/report-http-serivce';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  reports: Report [];

  constructor(private  reportService: ReportService,
              private  httpReportService: ReportHttpService) { // DI - dependency injection
    this.reports = reportService.reports;
    httpReportService.get().subscribe(
      (reports) => {
            console.log(reports);
      },
      (error) => {
            console.log(error);
      });

  }


  buttonClicked(event: MouseEvent) {
    alert(event.clientX);
  }

  deleteReport(event: Report) {
    const idx = this.reports.indexOf(event);
    this.reports.splice(idx, 1);
  }
}
