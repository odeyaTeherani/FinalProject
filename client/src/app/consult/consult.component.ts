import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchChanged(event: any) {
    // go to server and fetch the filterd events
    console.log(event);
  }
}
