import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Report} from '../../Models/Report';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {

  @Input() report:Report;
  @Output() reportDeleted = new EventEmitter<Report>();
  constructor(private  reportService:ReportService) { // DI - dependency injection

  }

  ngOnInit() {
  }

  delete(report: Report) {
    // this.reportDeleted.emit(report);
    this.reportService.delete(report);
  }
}
