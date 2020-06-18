import {Component, Input, OnInit} from '@angular/core';
import {Report} from '../../shared/modles/report';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent implements OnInit {

  @Input() alert:Report;
  // @Input() id;
  // @Input() eventType;
  // @Input() date;
  @Input() mobileQuery?;
  @Input() isNotMobile?;
  constructor() { }

  ngOnInit() {}

}
