import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportService} from '../shared/services/report-service';
import {Report} from '../shared/modles/report';
import {SeverityLevel} from '../shared/modles/severity-level.enum';
import {EventType} from '../shared/modles/event-type';
import {UserInformation} from '../shared/modles/userInformation';
import {AccountService} from '../shared/services/account.service';
import {Ng2ImgMaxService} from 'ng2-img-max';

// import any = jasmine.any;

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  images = [];
  location: { longitude: number, latitude: number, googlePlacesData: { formattedAddress: any } };
  zoom = 15;
  slRef = SeverityLevel;
  viewMode: boolean;
  reportForm: FormGroup;
  eventType: EventType;
  alert: Report;
  severityLevel: any;
  carNumberData: string;
  spinner = false;


  constructor(private  activeRoute: ActivatedRoute,
              private router: Router,
              private reportService: ReportService,
              private accountService: AccountService,
              private fb: FormBuilder,
              private ng2ImgMax: Ng2ImgMaxService) {
    this.location = {longitude: null, latitude: null, googlePlacesData: {formattedAddress: null}};
    activeRoute.params.subscribe((params) => {
      // display alert
      if (params.id != null) {
        this.spinner = true;
        this.viewMode = true;
        const alertId = params.id;
        this.reportService.getById(alertId)
          .subscribe((report: Report) => {
            this.spinner = false;
            this.location = report.location;
            this.alert = report;
            this.images = report.images;
            this.eventType = report.eventType;
            this.severityLevel = report.severityLevel;
            console.log(this.location.googlePlacesData);
            this.initForm();
          });

        // new Alert
      } else {
        this.getCarNumberAndInit();
      }
    });

  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.longitude = position.coords.longitude;
        this.location.latitude = position.coords.latitude;
        // this.location = {
        //   googlePlacesData: null,
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude
        // };
      });
    } else {
      this.location.longitude = null;
      this.location.latitude = null;    }
  }

  // getLocation(): void {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.location = {
  //         googlePlacesData: null,
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude
  //       };
  //     });
  //   } else {
  //     this.location = null;
  //   }
  // }

  submit() {
    this.spinner = true;
    console.log(this.location.googlePlacesData);
    const newReport = this.reportForm.value;
    newReport['images'] = this.images;
    newReport['location'] = this.location;
    newReport['eventType'] = this.eventType;
    newReport['severityLevel'] = this.severityLevel;
    // newReport['location']['googlePlacesData'] = this.googlePlacesData;
    console.log(this.severityLevel);
    this.reportService.add(newReport)
      .subscribe(
        () => {
          this.spinner = false;
          this.router.navigate(['/reportingHistory']);
        },
        err => {
          console.log(err);
        }
      );
  }

  private initForm() {
    const data: any = this.alert == null ? {} : this.alert;
    if (this.carNumberData) {
      data.carNumber = this.carNumberData;
    }
    this.reportForm = this.fb.group({
      carNumber: [data.carNumber || null, Validators.required],
      numberOfEvacuatedInjured: [data.numberOfEvacuatedInjured || null, Validators.required],
      note: [data.note || null]
    });
  }

  onFileSelected(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    this.ng2ImgMax.resizeImage(selectedFile, 800, 600).subscribe(
      resizedImage => {
        reader.readAsDataURL(resizedImage);
        reader.onload = (e: any) => {
          this.images.push(e.target.result);
        };
      },
      error => {
        console.log('😢', error);
      }
    );
  }

  getCarNumberAndInit() {
    this.accountService.getCurrentUser()
      .subscribe(
        (user: UserInformation) => {
          console.log(user.carNumber);
          this.carNumberData = user.carNumber;
          this.initForm();
        },
        error => {
          console.log(error);
        });
  }

}
