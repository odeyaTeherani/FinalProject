import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-close-event',
  templateUrl: './close-event.component.html',
  styleUrls: ['./close-event.component.scss']
})
export class CloseEventComponent implements OnInit {
  filterOptions: FormGroup;
  @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

  constructor(fb: FormBuilder) {
    this.filterOptions = fb.group({
      date: null,
      eventType: null,
      locationFiled: null,
      severityLevel: null,
    });
  }

  ngOnInit() {
  }

  submit() {
    // every time that somebody change the search new options are publish
    this.searchChanged.emit(this.filterOptions.value);
  }

}
