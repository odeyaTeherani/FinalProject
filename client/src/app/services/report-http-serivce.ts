import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Report} from '../Models/Report';


@Injectable({
  providedIn:'root'
})
export class ReportHttpService {

    constructor(private http:HttpClient) {

    }

    get():Observable<Report> {
      return this.http.get<Report>('https://jsonplaceholder.typicode.com/todos');
    }

}
