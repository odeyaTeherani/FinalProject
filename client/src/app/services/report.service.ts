import {Injectable, OnInit} from '@angular/core';
import {Report} from '../Models/Report';


@Injectable({
  providedIn:'root'
})
export class ReportService {

  reports: Report [];

  constructor() {
    this.reports = [
      {
        creator: 'Dong',
        date: new Date(),
        location: {
          address:'Wallstreet 76 NYC',
          xCoordinate:' 40.706005',
          yCoordinate: '-74.008827'
        }
      },
      {
        creator: 'Fong',
        date: new Date()
      }
      , {
        creator: 'Chong',
        date: new Date()
      }, {
        creator: 'Long',
        date: new Date()
      }
    ];
  }

  delete(report) {
      const idx = this.reports.indexOf(report);
      this.reports.splice(idx,1);
  }
}
