import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportService} from '../shared/services/report-service';
import {Report} from '../shared/modles/report';
import {SeverityLevel} from '../shared/modles/severity-level.enum';
import {EventType} from '../shared/modles/event-type';

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
  reportForm: FormGroup;
  eventType: EventType;
  alert: Report;
  severityLevel: any;

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
            console.log(this.alert);
            this.images = report.images;
            this.eventType = report.eventType;
            this.severityLevel = report.severityLevel;
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
    newReport['eventType'] = this.eventType;
    newReport['severityLevel'] = this.severityLevel;
    console.log(this.severityLevel);
    this.reportService.add(newReport)
      .subscribe(
        (result) => {
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
      // severityLevel: [{value: this.slRef[data.severityLevel] || null, disabled: this.viewMode}, Validators.required],
      // eventType: [data.eventType || null, Validators.required],
      numberOfEvacuatedInjured: [data.numberOfEvacuatedInjured || null, Validators.required],
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
