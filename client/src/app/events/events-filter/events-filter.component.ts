import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-events-filter',
  templateUrl: './events-filter.component.html',
  styleUrls: ['./events-filter.component.scss']
})
export class EventsFilterComponent implements OnInit {
  filterOptions: FormGroup;

  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      date: null,
      eventType: null,
      // new FormControl(this.typeOptions.map(x=>x.name)  || null, Validators.required),
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
