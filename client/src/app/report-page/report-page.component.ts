import {Component, OnInit} from '@angular/core';
import {Utils} from '../shared/Utils';
import {SeverityLevel} from '../shared/modles/event';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Report} from '../reporting-history/reporting-history.component';
import {ReportService} from '../shared/services/report-service';
import * as faker from 'faker';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  url;
  selectedFile = null;
  slRef = SeverityLevel;
  viewMode: boolean;
  severityOption: string[] = Utils.getEnumValues(this.slRef);
  reportForm: FormGroup;

  // edit mode section
  alert: Report;

  constructor(private  activeRoute: ActivatedRoute,
              private reportService: ReportService,
              private fb: FormBuilder) {

    activeRoute.params.subscribe((params) => {
      if (params.id != null) {
        this.viewMode = true;
        const alertId = params.id;

        this.reportService.getById(alertId)
          .subscribe((report) => {
            this.alert = report;
            console.log(this.alert);
            this.initForm();
          });

      } else {
        this.initForm();
      }

    });

  }

  ngOnInit() {

  }

  submit() {
    const newReport = this.reportForm.value;
    newReport.id = faker.random.uuid();
    this.reportService.add(newReport)
      .subscribe(
        (result) => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
  }

  private initForm() {
    const data: any = this.alert == null ? {} : this.alert;
    this.reportForm = this.fb.group({
      carNumber: [data.carNumber || null, Validators.required],
      severityLevel: [{value: this.slRef[data.severityLevel] || null, disabled: this.viewMode}, Validators.required],
      name: [data.name || null, Validators.required],
      NumberOfEvacuatedInjured: [data.NumberOfEvacuatedInjured || null, Validators.required],
      NumberRescued:[data.NumberRescued || null, Validators.required]
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (e:any) => {
      this.url = e.target.result;
    };
  }

}
