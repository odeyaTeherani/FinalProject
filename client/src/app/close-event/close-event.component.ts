import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-event',
  templateUrl: './close-event.component.html',
  styleUrls: ['./close-event.component.scss']
})
export class CloseEventComponent implements OnInit {
  severityOption: any;
  typeOptions: any;

  constructor() { }

  ngOnInit() {
  }

}
