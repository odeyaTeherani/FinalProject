import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Utils} from '../../Utils';
import {SeverityLevel} from '../../modles/event';

@Component({
  selector: 'app-severity-level',
  templateUrl: './severity-level.component.html',
  styleUrls: ['./severity-level.component.scss']
})
export class SeverityLevelComponent implements OnInit {
  slRef = SeverityLevel;
  severityOption: string[] = Utils.getEnumValues(this.slRef);
  @Output() changed = new EventEmitter<string>();
  @Input() size = 20;
  @Input() labelText = 'Severity Level';

  constructor() {
  }

  ngOnInit() {
  }

}
