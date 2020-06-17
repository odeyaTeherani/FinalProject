import {Component, Injector, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TokenService} from '../system-values.module';

@Component({
    selector: 'app-element-list',
    templateUrl: './element-list.component.html',
    styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {
    elements: any[];
    @Input() serviceName: string;
    @Input() elementName: string;
    addMode = false;
    elementsCtrl: FormControl;
    service;

    constructor(private injector: Injector, private tokenService: TokenService) {
    }

    ngOnInit() {
        this.service = this.injector.get(this.tokenService.getToken(this.serviceName));
        this.service.get().subscribe((elements) => {
            this.elements = elements;
            console.log(elements);
        }, (error) => {
            console.log(error);
        });
        this.elementsCtrl = new FormControl(null, Validators.required);
    }

    add() {
        this.service.add(this.elementsCtrl.value).subscribe(
            (element: any) => {
                this.addMode = false;
                this.elements.unshift(element);
            },
            error => {
                console.log(error);
            }
        );
    }

    delete(id: number) {
        this.elements.splice(this.elements.indexOf(this.elements.find(x => x.id === id)), 1);
    }
}
