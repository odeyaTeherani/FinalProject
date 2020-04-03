import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Utils} from '../shared/Utils';
import {EventType} from '../reporting-history/reporting-history.component';
import {SeverityLevel} from '../shared/modles/event';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})

export class ConsultComponent implements OnInit {
  filterOptions: FormGroup;

  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

  // will be injected from default service contains location options list (From server)
  typeOptions: EventType [] = [{id:1,name:'Fire'}, {id:2,name:'Building collapse'} , {id:3, name:'Other'}];

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      eventType: new FormControl(this.typeOptions.map(x=>x.name)  || null, Validators.required),
      locationFiled: null,
      severityLevel: new FormControl([] , Validators.required),
    });
  }

  ngOnInit() {
  }

  submit() {
    this.searchChanged.emit(this.filterOptions.value); // every time that somebody change the search new options are publish
  }

}
