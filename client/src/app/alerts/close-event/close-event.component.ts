import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    // this.initForm();
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

    this.reportsDataService.getCurrentData();
  }

  private initForm() {

    // const data: any = this.alert == null ? {} : this.alert;

    this.eventForm = this.fb.group({
      eventType: new FormControl([null, Validators.required]),
      locationFiled: new FormControl([null, Validators.required]),
      severityLevel: new FormControl([null, Validators.required]),
      numOfInjured: new FormControl([null, Validators.required]),
      numOfDead: new FormControl([null, Validators.required]),
      numOfPolice: new FormControl([null, Validators.required]),
      numOfAmbulances: new FormControl([null, Validators.required]),
      numOfFirefighters: new FormControl([null, Validators.required]),
      numOfEnvironment: new FormControl([null, Validators.required]),
      numOfZakaCars: new FormControl([null, Validators.required]),
      endDate: new FormControl([null, Validators.required]),
      startDate: new FormControl([null, Validators.required]),
      nameInCharge: new FormControl([null, Validators.required]),
      note: new FormControl([null]),
    });
  }

  submit() {
    const newEvent = this.eventForm.value;
    newEvent['images'] = this.images;
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
}
