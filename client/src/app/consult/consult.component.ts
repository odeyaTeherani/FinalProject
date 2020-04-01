import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:class-name
interface event {
  value: string;
  viewValue: string;
}
// tslint:disable-next-line:class-name
interface severity {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  Severity: severity[] = [
    {value: 'Easy-0', viewValue: 'Easy'},
    {value: 'Low-1', viewValue: 'Low'},
    {value: 'Medium-2', viewValue: 'Medium'},
    {value: 'Hard-3', viewValue: 'Hard'},
    {value: 'Very Hard-4', viewValue: 'Very Hard'}
  ]

  Events: event[] = [
    {value: 'Fire-0', viewValue: 'Fire'},
    {value: 'Building collapse-1', viewValue: 'Building collapse'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
