import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../shared/services/event.service';
import {DatePipeService} from "../../shared/services/date-pipe.service";

@Component({
    selector: 'app-events-filter',
    templateUrl: './events-filter.component.html',
    styleUrls: ['./events-filter.component.scss']
})

export class EventsFilterComponent implements OnInit {
    filterOptions: FormGroup;
    @Output() searchChanged = new EventEmitter<any>();  // event that however want can be listing

    constructor(fb: FormBuilder,
                private eventService: EventService,
                private dateFormat: DatePipeService) {
        this.filterOptions = fb.group({
            date: null,
            eventType: null,
            location: null,
            severityLevel: null,
        });
    }

    ngOnInit() {
    }

    submit() {
        const filter = this.filterOptions.value;
        if (filter['date'])
            filter['date'] = this.dateFormat.format(filter['date'])
        this.searchChanged.emit(this.filterOptions.value);
    }
}
