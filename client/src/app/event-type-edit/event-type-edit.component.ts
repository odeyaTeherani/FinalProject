import {Component, OnInit} from '@angular/core';
import {EventType} from '../shared/modles/event-type';
import {EventTypeService} from '../shared/services/event-type.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-event-type-edit',
    templateUrl: './event-type-edit.component.html',
    styleUrls: ['./event-type-edit.component.scss']
})
export class EventTypeEditComponent implements OnInit {
    eventsType: EventType[];
    addMode = false;
    newEventTypeCtrl: FormControl;

    constructor(private eventTypeService: EventTypeService) {
        this.newEventTypeCtrl = new FormControl(null, Validators.required)
    }

    ngOnInit() {
        this.eventTypeService.getAll()
            .subscribe(
                (e: EventType[]) => {
                    this.eventsType = e;
                },
                error => {
                    console.log(error);
                });
    }

    addNewEventType() {
        this.eventTypeService.add(this.newEventTypeCtrl.value).subscribe(
            (newEventType: EventType) => {
                console.log(newEventType);
                this.addMode = false;
                this.eventsType.unshift(newEventType)
            },
            error => {
                console.log(error);
            }
        );
    }

    onDeleteSucceed(id: number) {
        this.eventsType.splice(this.eventsType.indexOf(this.eventsType.find(x => x.id == id)), 1);
    }
}
