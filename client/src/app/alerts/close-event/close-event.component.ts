import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/services/event.service';
import {ReportsDataService} from '../reports-data.service';
import {Report} from '../../reporting-history/reporting-history.component';
import {Subscription} from 'rxjs';
import {SeverityLevel} from '../../shared/modles/event';
import {Event} from '../../shared/modles/event';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-close-event',
  templateUrl: './close-event.component.html',
  styleUrls: ['./close-event.component.scss'],
  providers: [DatePipe]
})
export class CloseEventComponent implements OnInit, OnDestroy {
  // images = [];
  eventForm: FormGroup;
  viewMode: boolean;
  slRef = SeverityLevel;
  eventId: number;

  // edit mode section
  event: Event;
  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing
  alertsSubscription: Subscription;

  // selected alert to close
  selectedAlerts: Report[];
  eventType: any;
  severityLevel: any;
  location: any;

  constructor(private  activeRoute: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private fb: FormBuilder,
              private reportsDataService: ReportsDataService,
              private datePipe: DatePipe) {
    activeRoute.params.subscribe((params) => {
      // display event
      if (params.id != null) {
        this.viewMode = true;
        this.eventId = params.id;
        this.eventService.getById(this.eventId)
          .subscribe((event: Event) => {
            this.event = event;
            this.eventType = event.eventType;
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
        if(alerts != null) {
          this.selectedAlerts = alerts.filter(alert => alert.selected);
        }
      });
    this.reportsDataService.emitReportsState();
  }

  private initForm() {
    const data: any = this.event == null ? {} : this.event;
    this.eventForm = this.fb.group({
      id: [data.id || null],
      numOfInjured: [data.numOfInjured || null, Validators.required],
      numOfDead: [data.numOfDead || null, Validators.required],
      numOfPolice: [data.numOfPolice || null, Validators.required],
      numOfAmbulances: [data.numOfFirefighters || null, Validators.required],
      numOfFirefighters: [data.numOfFirefighters || null, Validators.required],
      numOfEnvironment: [data.numOfEnvironment || null, Validators.required],
      numOfZakaCars: [data.numOfZakaCars || null, Validators.required],
      endDate: [data.endDate || null, Validators.required],
      startDate: [data.startDate || null, Validators.required],
      nameInCharge: [data.nameInCharge || null, Validators.required],
      note: [data.note || null],
    });
  }

  submit() {
    const event = this.eventForm.value;
    event['reports'] = this.selectedAlerts;
    event['eventType'] = this.eventType;
    event['severityLevel'] = this.severityLevel;
    event['startDate'] = this.datePipe.transform(event['startDate'],'yyyy-MM-dd');
    event['endDate'] = this.datePipe.transform(event['endDate'],'yyyy-MM-dd');
    event['location'] = this.location;
    console.log(event);
    if (this.eventId == null) {
      this.addEvent(event);

    } else {
      this.editEvent(event);
    }

  }

  addEvent(newEvent) {
    // console.log(newEvent);
    this.eventService.add(newEvent)
      .subscribe(
        (result) => {
          // console.log(result);
          this.router.navigate(['/events']);
        },
        err => {
          console.log(err);
        }
      );
  }

  editEvent(updateEvent) {
    // updateEvent['images'] = this.images;
    updateEvent['reports'] = [];
    // console.log(updateEvent);
    this.eventService.put(updateEvent)
      .subscribe(
        (result) => {
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
  }

  edit() {
    this.viewMode = false;
  }

  exportToPDF() {
  }
}
