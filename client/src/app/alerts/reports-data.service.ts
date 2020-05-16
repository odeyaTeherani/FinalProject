import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Report} from "../reporting-history/reporting-history.component";
import {ReportService} from "../shared/services/report-service";

@Injectable()
export class ReportsDataService implements OnInit {

    reports: Report [];
    onEventsChange: EventEmitter<Report []> = new EventEmitter<Report[]>();

    constructor(private reportService: ReportService) {}

    ngOnInit() {
        this.getData();
    }

    public getData(){
        this.reportService.get()
            .subscribe((events:Report []) => {
                this.reports = events;
                console.log(this.reports);
                this.getCurrentData();
            });
    }

    public getCurrentData(){
        this.onEventsChange.emit(this.reports);
    }
}
