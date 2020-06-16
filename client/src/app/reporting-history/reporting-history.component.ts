import {Component, OnInit} from '@angular/core';
import {ReportService} from '../shared/services/report-service';
import {Report} from '../shared/modles/report';


@Component({
  selector: 'app-user-reporting-history',
  templateUrl: './reporting-history.component.html',
  styleUrls: ['./reporting-history.component.scss']
})

export class ReportingHistoryComponent implements OnInit {
  reports: Report [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
      this.reportService.get()
          .subscribe(
              (reports) => {
                  this.reports = reports;
                  console.log('Back from server - ', reports);
              },
              (error) => {
                  console.log(error);
              });
  }

  delete(report: Report) {
    this.reportService.delete(report.id)
      .subscribe(
        () => {
          const idx = this.reports.indexOf(report);
          this.reports.splice(idx, 1);
        },
        (error) => {
          console.log(error);
        });
  }

  edit(report: Report) {
    const editedEntity = {...report};
    this.reportService.edit(editedEntity)
      .subscribe(
        (res) => {
          this.reportService.get().subscribe(
            () => {
                const  idx =  this.reports.indexOf(report);
                this.reports[idx] = editedEntity;
            });
        },
        (error) => {
          console.log(error);
        });
  }
}
