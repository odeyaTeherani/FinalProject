import {Component, OnInit} from '@angular/core';
import {Utils} from '../shared/Utils';
import {SeverityLevel} from '../shared/modles/event';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventType, Report} from '../reporting-history/reporting-history.component';
import {ReportService} from '../shared/services/report-service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  images = [];
  locationCoordinates: { longitude: number, latitude: number };
  zoom = 15;
  slRef = SeverityLevel;
  viewMode: boolean;
  severityOption: string[] = Utils.getEnumValues(this.slRef);
  reportForm: FormGroup;

  // edit mode section
  alert: Report;

  // TODO: should return form db (TO DELETE)
  typeOptions: EventType [] = [{id: 1, name: 'Fire'}, {id: 2, name: 'Building collapse'}];

  constructor(private  activeRoute: ActivatedRoute,
              private router: Router,
              private reportService: ReportService,
              private fb: FormBuilder) {

    activeRoute.params.subscribe((params) => {
      // display alert
      if (params.id != null) {
        this.viewMode = true;
        const alertId = params.id;

        this.reportService.getById(alertId)
          .subscribe((report: Report) => {
            this.alert = report;
            this.images = report.images;
            console.log(report.location);
            this.locationCoordinates = report.location;
            this.initForm();
          });

        // new Alert
      } else {
        this.initForm();
      }
    });

  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locationCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      });
    } else {
      this.locationCoordinates = null;
    }
  }

  submit() {
    const newReport = this.reportForm.value;
    newReport['images'] = this.images;
    newReport['location'] = this.locationCoordinates;
    this.reportService.add(newReport)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/reportingHistory']);
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
      numberOfEvacuatedInjured: [data.numberOfEvacuatedInjured || null, Validators.required],
      eventType: [{value: null, disabled: this.viewMode}, Validators.required],
      note: [data.note || null]
    });
  }

  onFileSelected(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e: any) => {
      this.images.push(e.target.result);
    };
  }

}
