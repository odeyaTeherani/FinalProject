import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventType} from '../../shared/modles/event-type';
import {EventTypeService} from '../../shared/services/event-type.service';

@Component({
    selector: 'app-event-type-item',
    templateUrl: './event-type-item.component.html',
    styleUrls: ['./event-type-item.component.scss']
})
export class EventTypeItemComponent {

    editMode = false;
    @Input() eventType: EventType;
    @Output() onDeleteSucceed: EventEmitter<number> = new EventEmitter<number>();

    constructor(private eventTypeService: EventTypeService) {}

    editEventType() {
        this.eventTypeService.edit(this.eventType)
            .subscribe(
                () => {
                    this.editMode = false;
                },
                error => {
                    console.log(error);
                }
            );
    }

    deleteEventType(deleted: EventType) {
        this.eventTypeService.delete(deleted)
            .subscribe(() => {
                    this.editMode = false;
                    this.onDeleteSucceed.emit(deleted.id);
                },
                error => {
                    console.log(error);
                });
    }

}
