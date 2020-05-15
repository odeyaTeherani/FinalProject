import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {EventService} from '../../../shared/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  id: number;
  qp: any;
  routeSubscription: Subscription;

  /*private activeRoute: RouterLinkActive*/
  constructor(private activeRoute: ActivatedRoute,
              private eventService: EventService) {
    // eventService.onEventsChange.subscribe((result)=> {
    //   console.log(result);
    // });
  }

  ngOnInit() {
    console.log('on init run');
    this.routeSubscription = this.activeRoute.params.subscribe(
      (params) => {
        this.id = Number(params.id);
        // this.eventService.getEvent(this.id);
        console.log(this.id);
      }
    );
  }

  ngOnDestroy(): void {
    console.log('on destroy run');
    this.routeSubscription.unsubscribe();
  }

}
