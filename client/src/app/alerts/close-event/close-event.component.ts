import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/services/event.service';
import {ReportsDataService} from '../reports-data.service';
import {Report} from '../../reporting-history/reporting-history.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-close-event',
  templateUrl: './close-event.component.html',
  styleUrls: ['./close-event.component.scss']
})
export class CloseEventComponent implements OnInit, OnDestroy {
  images = [];
  eventForm: FormGroup;
  viewMode: boolean;
  // edit mode section
  alert: Event;
  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing
  alertsSubscription: Subscription;

  // selected alert to close
  selectedAlerts: Report[];

  constructor(private  activeRoute: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private fb: FormBuilder,
              private reportsDataService: ReportsDataService) {
    this.initForm();
    activeRoute.params.subscribe((params) => {
      // display event
      if (params.id != null) {
        this.viewMode = true;
        const eventId = params.id;

        this.eventService.getById(eventId)
          .subscribe(event => {
            // this.event = event;
            this.images = event.images;
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
      this.selectedAlerts = alerts.filter(alert => alert.selected);
    });

    this.reportsDataService.emitReportsState();
  }

  private initForm() {

    // const data: any = this.alert == null ? {} : this.alert;

    this.eventForm = this.fb.group({
      eventType: [null, Validators.required],
      locationFiled:[null, Validators.required],
      severityLevel:[null, Validators.required],
      numOfInjured: [null, Validators.required],
      numOfDead: [null, Validators.required],
      numOfPolice:[null, Validators.required],
      numOfAmbulances:[null, Validators.required],
      numOfFirefighters:[null, Validators.required],
      numOfEnvironment: [null, Validators.required],
      numOfZakaCars: [null, Validators.required],
      endDate:[null, Validators.required],
      startDate: [null, Validators.required],
      nameInCharge: [null, Validators.required],
      note: [null],
    });
  }

  submit() {
    const newEvent = this.eventForm.value;
    newEvent['reports'] = this.selectedAlerts;
    console.log(newEvent);
    this.eventService.add(newEvent)
      .subscribe(
        (result) => {
          console.log(result);
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
    const updateEvent = this.eventForm.value;
    updateEvent['images'] = this.images;
    console.log(updateEvent);
    this.eventService.put(updateEvent)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/events']);
        },
        err => {
          console.log(err);
        }
      );
  }

  exportToPDF() {

  }
}
