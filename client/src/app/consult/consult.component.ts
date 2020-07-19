import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/services/event.service';
import {Consult} from '../shared/modles/consult';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  result: Consult = {
    number_of_ambulances_car: null,
    number_of_environment_car: null,
    number_of_fire_fighters_car: null,
    number_of_police_cars: null,
    number_of_zaka_cars: null,
  };
  spinner = false;

  constructor(private eventService: EventService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  searchChanged(event: any) {
    this.spinner = true;
    // console.log(event);
    // go to server and fetch the filterd events
    this.eventService.getConsult(event)
      .subscribe((value: Consult) => {
          this.spinner = false;
          this.result = value;
        },
        () => {
          this.spinner = false;
          this.matSnackBar.open('Get Consult Fail',
            'Fail', {duration: 4000});
        }
      );

  }
}
