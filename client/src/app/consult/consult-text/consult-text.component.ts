import {Component, Input, OnInit} from '@angular/core';
import {Consult} from '../../shared/modles/consult';

@Component({
  selector: 'app-consult-text',
  templateUrl: './consult-text.component.html',
  styleUrls: ['./consult-text.component.scss']
})
export class ConsultTextComponent implements OnInit {

  @Input() text: Consult;
  constructor() { }

  ngOnInit() {
  }

}
