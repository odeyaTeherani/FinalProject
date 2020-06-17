import {TokenService} from '../../system-values.module';
import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-element-item',
    templateUrl: './element-item.component.html',
    styleUrls: ['./element-item.component.scss']
})
export class ElementItemComponent implements OnInit {

    editMode = false;
    @Input() element: any;
    @Input() serviceName: string;
    @Output() onDeleteSucceed: EventEmitter<number> = new EventEmitter<number>();
    service;

    constructor(private injector: Injector, private tokenService: TokenService) {}

    ngOnInit() {
        this.service = this.injector.get(this.tokenService.getToken(this.serviceName));
    }

    edit() {
        this.service.edit(this.element)
            .subscribe(
                () => {
                    this.editMode = false;
                },
                error => {
                    console.log(error);
                }
            );
    }

    delete() {
        this.service.delete(this.element.id)
            .subscribe(() => {
                    this.editMode = false;
                    this.onDeleteSucceed.emit(this.element.id);
                },
                error => {
                    console.log(error);
                });
    }

}
