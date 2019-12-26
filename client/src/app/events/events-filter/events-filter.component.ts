import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SeverityLevel} from '../../shared/modles/event';
import {Utils} from '../../shared/Utils';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss']
})
export class EventsFilterComponent implements OnInit {
  slRef = SeverityLevel;
  filterOptions: FormGroup;

  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

  severityOption: string[] = Utils.getEnumValues(this.slRef);

  // will be injected from default service contains location options list (From server)
  typeOptions: any [] = [{id:1,name:'Fire'}, {id:2,name:'Building collapse'} , {id:3, name:'Other'}];

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      date: null,
      eventType: new FormControl(this.typeOptions.map(x=>x.name)  || null, Validators.required),
      locationFiled: null,
      severityLevel: new FormControl(this.severityOption , Validators.required),
    });
  }

  ngOnInit() {
  }

  submit() {
    this.searchChanged.emit(this.filterOptions.value); // every time that somebody change the search new options are publish
  }

  displayWith(event: {id: number,name: string}) {
    console.log(event);
    if (event == null) {return;}
    return event.name;
  }
}
