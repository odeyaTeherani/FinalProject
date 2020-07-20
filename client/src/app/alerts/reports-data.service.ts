import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {ReportService} from '../shared/services/report-service';
import {Report} from '../shared/modles/report';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class ReportsDataService {

  reports: Report [];
  onEventsChange: EventEmitter<Report []> = new EventEmitter<Report[]>();

  constructor(private reportService: ReportService,
              private matSnackBar:MatSnackBar) {
    console.log('load report data service');
    this.getReportsFromServer();
  }


  public getReportsFromServer() {
    this.reportService.get()
      .subscribe(
        (reports: Report []) => {
        this.reports = reports;
        // console.log(this.reports);
        this.emitReportsState();
      },
        () => {
          this.matSnackBar.open('Load Alerts Fail', 'Fail', {duration:4000});
        });
  }

  public emitReportsState() {
    this.onEventsChange.emit(this.reports);
  }
}
