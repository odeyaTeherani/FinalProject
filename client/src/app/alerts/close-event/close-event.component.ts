import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/services/event.service';
import {ReportsDataService} from '../reports-data.service';
import {Subscription} from 'rxjs';
import {Event} from '../../shared/modles/event';
import {SeverityLevel} from '../../shared/modles/severity-level.enum';
import {Report} from '../../shared/modles/report';
import {DatePipeService} from '../../shared/services/date-pipe.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-close-event',
  templateUrl: './close-event.component.html',
  styleUrls: ['./close-event.component.scss']
})
export class CloseEventComponent implements OnInit, OnDestroy {
  images = [];
  isNotMobile: boolean;
  thereIsImages = false;
  thereIsAlerts = false;
  eventForm: FormGroup;
  viewMode: boolean;
  editMode = false;
  slRef = SeverityLevel;
  eventId: number;
  event: Event;
  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing
  alertsSubscription: Subscription;
  private readonly mobileQueryListener: () => void;
  // selected alert to close
  selectedAlerts: Report[];
  eventType: any;
  severityLevel: any;
  location: { longitude: number, latitude: number, googlePlacesData: { formattedAddress:any } };
  mobileQuery: MediaQueryList;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              media: MediaMatcher,
              private eventService: EventService,
              private fb: FormBuilder,
              private reportsDataService: ReportsDataService,
              private datePipe: DatePipeService) {
    this.location = {longitude: null, latitude: null, googlePlacesData: {formattedAddress:null}};
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => {
      this.isNotMobile = !this.mobileQuery.matches;
    };
    this.mobileQuery.addListener(this.mobileQueryListener);

    activeRoute.params.subscribe((params) => {
      // display event
      if (params.id != null) {
        this.viewMode = true;
        this.eventId = params.id;
        this.eventService.getById(this.eventId)
          .subscribe((event: Event) => {
            this.event = event;
            this.eventType = event.eventType;
            this.images = event.images;
            if (this.images[0] != null) {
              this.thereIsImages = true;
            }
            if (this.selectedAlerts) {
              if (this.selectedAlerts[0] != null) {
                this.thereIsAlerts = true;
              }
            }
            this.severityLevel = event.severityLevel;
            this.location = event.location;
            this.initForm();
          });
        // new event
      } else {
        this.initForm();
      }

    });
  }

  ngOnInit() {
    this.alertsSubscription = this.reportsDataService
      .onEventsChange
      .subscribe((alerts: Report []) => {
        if (alerts != null) {
          this.selectedAlerts = alerts.filter(alert => alert.selected);
        }
      });
    this.reportsDataService.emitReportsState();
  }

  private initForm() {
    const data: any = this.event == null ? {} : this.event;
    this.eventForm = this.fb.group({
      id: [data.id || null],
      numOfInjured: [data.numOfInjured || 0, Validators.required],
      numOfDead: [data.numOfDead || 0, Validators.required],
      numOfPolice: [data.numOfPolice || 0, Validators.required],
      numOfAmbulances: [data.numOfFirefighters || 0, Validators.required],
      numOfFirefighters: [data.numOfFirefighters || 0, Validators.required],
      numOfEnvironment: [data.numOfEnvironment || 0, Validators.required],
      numOfZakaCars: [data.numOfZakaCars || 0, Validators.required],
      endDate: [{value: data.endDate || null, disabled: this.viewMode} , Validators.required],
      startDate: [{value: data.startDate  || null, disabled: this.viewMode}, Validators.required],
      startTime: [{value: data.startTime || null, disabled: this.viewMode}, Validators.required],
      endTime: [{value: data.endTime || null, disabled: this.viewMode}, Validators.required],
      nameInCharge: [data.nameInCharge || null, Validators.required],
      note: [data.note || null],
    });
  }

  submit() {
    const event = this.eventForm.value;
    event['reports'] = this.selectedAlerts;
    event['eventType'] = this.eventType;
    event['severityLevel'] = this.severityLevel;
    event['startDate'] = this.datePipe.format(event['startDate']);
    event['endDate'] = this.datePipe.format(event['startDate']);
    event['location'] = this.location;
    event['images'] = this.images;
    console.log(event);
    if (this.eventId == null) {
      this.addEvent(event);

    } else {
      this.editEvent(event);
    }

  }

  addEvent(newEvent) {
    this.eventService.add(newEvent)
      .subscribe(
        () => {
          this.router.navigate(['/events']);
        },
        err => {
          console.log(err);
        }
      );
  }

  editEvent(updateEvent) {
    updateEvent['reports'] = [];
    // console.log(updateEvent);
    this.eventService.put(updateEvent)
      .subscribe(
        () => {
          // console.log(result);
          this.router.navigate(['/events']);
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnDestroy() {
    if (this.alertsSubscription) {
      this.alertsSubscription.unsubscribe();
    }
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  edit() {
    this.editMode = true;
    this.viewMode = false;
    this.eventForm.controls['startDate'].enable({onlySelf: true});
    this.eventForm.controls['endDate'].enable({onlySelf: true});
    this.eventForm.controls['startTime'].enable({onlySelf: true});
    this.eventForm.controls['endTime'].enable({onlySelf: true});

  }
  // exportToPDF() {}

  onFileSelected(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (e: any) => {
      this.images.push(e.target.result);
    };
  }
}
