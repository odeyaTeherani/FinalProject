import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-consult-filter',
  templateUrl: './consult-filter.component.html',
  styleUrls: ['./consult-filter.component.scss']
})

export class ConsultFilterComponent implements OnInit {
  filterOptions: FormGroup;
  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      eventType: null,
      daysFiled: null,
      severityLevel: null,
    });
  }

  ngOnInit() {
  }

  submit() {
    this.searchChanged.emit(this.filterOptions.value); // every time that somebody change the search new options are publish
  }
}
