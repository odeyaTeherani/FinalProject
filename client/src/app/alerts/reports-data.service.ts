import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Report} from '../reporting-history/reporting-history.component';
import {ReportService} from '../shared/services/report-service';


@Injectable()
export class ReportsDataService {

  reports: Report [];
  onEventsChange: EventEmitter<Report []> = new EventEmitter<Report[]>();

  constructor(private reportService: ReportService) {
    console.log('load report data service');
    this.getData();
  }


  public getData() {
    this.reportService.get()
      .subscribe((reports: Report []) => {
        this.reports = reports;
        console.log(this.reports);
        this.getCurrentData();
      });
  }

  public getCurrentData() {
    this.onEventsChange.emit(this.reports);
  }
}