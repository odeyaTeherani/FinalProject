import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickOnButton(event: MouseEvent) {
    alert(event.clientY);
  }
}
