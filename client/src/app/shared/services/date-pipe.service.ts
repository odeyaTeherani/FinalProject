import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatePipeService {

  constructor(private datePipe: DatePipe) { }

  getTransform(name: string, obj: any) {
    return this.datePipe.transform(obj[name],'yyyy-MM-dd');
  }

}
