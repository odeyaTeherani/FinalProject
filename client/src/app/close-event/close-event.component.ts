import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/services/event.service';

@Component({
  selector: 'app-close-event',
  templateUrl: './close-event.component.html',
  styleUrls: ['./close-event.component.scss']
})
export class CloseEventComponent implements OnInit {
  images = [];
  eventForm: FormGroup;
  viewMode: boolean;
  // edit mode section
  alert: Event;
  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

  constructor(private  activeRoute: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private fb: FormBuilder) {
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

    });  }

  private initForm() {
    const data: any = this.alert == null ? {} : this.alert;
    this.eventForm = this.fb.group({
    eventType: null,
      location: null,
    severityLevel: null,
    numOfInjured: null,
    numOfDead: null,
    numOfPolice: null,
    numOfAmbulances: null,
    numOfFirefighters: null,
    numOfEnvironment: null,
    numOfZakaCars: null,
    endDate: null,
    startDate: null,
    nameInCharge: null,
      note: null
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

  ngOnInit(): void {
  }
}
