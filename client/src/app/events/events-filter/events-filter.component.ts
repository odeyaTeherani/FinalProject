import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SeverityLevel} from '../event';
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

  // from google
  locationOptions: string[] = ['Tel-aviv', 'Jerusalem', 'Beit-shemesh'];

  // will be injected from default service contains location options list (From server)
  typeOptions: string[] = ['Fire', 'Building collapse', 'Other'];

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      date: null,
      eventType: null,
      locationFiled: null,
      hardwareLevel: null,
    });
  }

  ngOnInit() {
  }

  submit() {
    this.searchChanged.emit(this.filterOptions.value); // every time that somebody change the search new options are publish
  }
}
