import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {
  path = '/api/event';

  constructor() { }
}