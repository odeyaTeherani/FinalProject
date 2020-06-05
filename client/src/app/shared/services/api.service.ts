import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  get<T>(path:string, headers?:HttpHeaders):Observable<T> {
    return this.http.get<T>(environment.url + path,{headers});
  }

  post<T>(path:string, body:any):Observable<T> {
    return this.http.post<T>(environment.url + path,body);
  }

  put<T>(path:string, body:any):Observable<T> {
    return this.http.put<T>(environment.url + path, body);
  }

  delete<T>(path:string):Observable<T> {
    return this.http.delete<T>(environment.url + path);
  }
}
