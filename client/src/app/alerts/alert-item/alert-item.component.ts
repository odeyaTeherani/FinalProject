import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent implements OnInit {

  @Input() alert;
  // @Input() id;
  // @Input() eventType;
  // @Input() date;
  @Input() mobileQuery?;
  @Input() isNotMobile?;
  constructor() { }

  ngOnInit() {}

}
