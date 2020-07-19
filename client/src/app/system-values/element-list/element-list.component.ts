import {Component, Injector, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TokenService} from '../token_service';

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
  spinner = true;

  constructor(private injector: Injector, private tokenService: TokenService) {
  }

  ngOnInit() {
    this.service = this.injector.get(this.tokenService.getToken(this.serviceName));
    this.service.get().subscribe(
      (elements) => {
        this.spinner = false;
        this.elements = elements;
        console.log(elements);
      },
      (error) => {
        this.spinner = false;
        console.log(error);
      });
    this.elementsCtrl = new FormControl(null, Validators.required);
  }

  add() {
    this.spinner = true;
    this.service.add(this.elementsCtrl.value).subscribe(
      (element: any) => {
        this.spinner = false;
        this.addMode = false;
        this.elements.unshift(element);
      },
      error => {
        this.spinner = false;
        console.log(error);
      }
    );
  }

  delete(id: number) {
    this.elements.splice(this.elements.indexOf(this.elements.find(x => x.id === id)), 1);
  }
}
