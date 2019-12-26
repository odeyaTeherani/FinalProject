import {Component, OnInit} from '@angular/core';
import {Utils} from '../shared/Utils';
import {SeverityLevel} from '../events/event';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  slRef = SeverityLevel;
  viewMode: boolean;
  severityOption: string[] = Utils.getEnumValues(this.slRef);
  reportForm: FormGroup;

  constructor(private  activeRoute: ActivatedRoute,
              private fb: FormBuilder) {

    activeRoute.params.subscribe((params) => {
      if (params.id != null) {
        this.viewMode = true;
      }
    });

  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    console.log(this.reportForm.value);
  }

  private initForm() {
    this.reportForm = this.fb.group({
      carNumber: [null, Validators.required],
      severityLevel: [null, Validators.required],
      name: [null, Validators.required]
    });
  }
}
