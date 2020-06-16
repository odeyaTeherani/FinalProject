import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatePipeService {

  constructor(private datePipe: DatePipe) { }

  format(date: string) {
    return this.datePipe.transform(date,'yyyy-MM-dd');
  }

}
