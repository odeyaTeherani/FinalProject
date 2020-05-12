import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  get<T>(path:string,headers?:HttpHeaders):Observable<T>{
    return this.http.get<T>(environment.url + path,{headers:headers});
  }

  post<T>(path:string,body:any):Observable<T>{
    return this.http.post<T>(environment.url + path,body);
  }

}
